import { Component, OnInit, ViewChild, OnDestroy, ViewContainerRef, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, Post} from './posts';
import { MediaMatcher } from '@angular/cdk/layout';
import { StorageService } from '../app.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { filter, take } from 'rxjs/operators';
import { Subscription, fromEvent } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';

const SIDENAV_MODE_PUSH = 'push';
const SIDENAV_MODE_SIDE = 'side';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  @ViewChild('dialog', { static: true }) dialog: TemplateRef<any>;
  @ViewChild('sidenav', { static: true }) sidenav;
  items: Item[];
  mediaQuery: MediaQueryList;
  listenerRef: any;
  sidenavMode: 'push' | 'side' = 'side';
  selected: Item;
  private overlayRef: OverlayRef;
  private overlaySubs: Subscription;


  constructor(
    private storage: StorageService,
    private route: ActivatedRoute,
    private mediaMatcher: MediaMatcher,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.items = this.route.snapshot.data.items;
    this.mediaQuery = this.mediaMatcher.matchMedia('(max-width: 769px)');
    this.listenerRef = (a: any) => {
        if (a.matches) {
          this.sidenav.close();
          this.sidenavMode = SIDENAV_MODE_PUSH;
        } else {
          this.sidenavMode = SIDENAV_MODE_SIDE;
          this.sidenav.open();
        }
    };
    this.mediaQuery.addListener(this.listenerRef);
    this.listenerRef(this.mediaQuery);
  }

  ngOnDestroy() {
    this.mediaQuery.removeListener(this.listenerRef);
  }

  onMouseMove(e: MouseEvent) {
    if (e.clientX < 20 && !this.sidenav.opened) {
      this.sidenav.open();
    }
  }

  onSelect(item: Item) {
    item.storage.read = true;
    this.storage.save(item.post.name, item.storage);
    this.selected = item;
    if (this.sidenavMode === SIDENAV_MODE_PUSH) {
      this.sidenav.close();
    }
  }

  onDismiss(item: Item) {
    item.storage.dism = true;
    this.storage.save(item.post.name, item.storage);
    this.items = this.items.filter(p => p.post.name !== item.post.name);
  }

  /**
   * Open dialog event handler
   */
  openDialog(post: Post) {
    this.close();
    const closeStrategy = this.overlay.scrollStrategies.close();
    this.overlayRef = this.overlay.create({
        scrollStrategy: closeStrategy
    });
    this.overlayRef.attach(new TemplatePortal(
        this.dialog,
        this.viewContainerRef,
        { post }
    ));
    this.overlaySubs = fromEvent<MouseEvent>(document, 'click')
      .pipe(
        filter(event => {
          const clickTarget = event.target as HTMLElement;
          return !!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget);
        }),
        take(1)
    ).subscribe(() => this.close());
  }

  /**
   *  Close the overlay instance and unsusbcribe
   *  its related events attached to document body (MouseClick)
   */
  close() {
    if (this.overlaySubs) {
      this.overlaySubs.unsubscribe();
    }
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

}
