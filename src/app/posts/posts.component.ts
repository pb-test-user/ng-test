import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from './posts';
import { MediaMatcher } from '@angular/cdk/layout';
import { StorageService } from '../app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav', { static: true }) sidenav;
  items: Item[];
  mediaQuery: MediaQueryList;
  listenerRef: any;
  sidenavMode: 'push' | 'side' = 'side';
  selected: Item;
  private Read = false;

  constructor(
    private storage: StorageService,
    private route: ActivatedRoute,
    private mediaMatcher: MediaMatcher
  ) {
  }

  ngOnInit() {
    this.items = this.route.snapshot.data.items;
    this.mediaQuery = this.mediaMatcher.matchMedia('(min-width: 640px)');
    this.listenerRef = ((postComponent) => {
      return (a: any) => {
        if (a.matches) {
          postComponent.sidenavMode = 'side';
          postComponent.sidenav.open();
        } else {
          postComponent.sidenav.close();
          postComponent.sidenavMode = 'push';
        }
      };
    })(this);
    this.mediaQuery.addListener(this.listenerRef);
  }

  ngOnDestroy() {
    this.mediaQuery.removeListener(this.listenerRef);
  }

  onSelect(item: Item) {
    item.storage.read = true;
    this.storage.save(item.post.name, item.storage);
    this.selected = item;
  }

  onDismiss(item: Item) {
    item.storage.dism = true;
    this.storage.save(item.post.name, item.storage);
    this.items = this.items.filter(p => p.post.name !== item.post.name);
  }
}
