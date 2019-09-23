import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditTopPosts } from './posts';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav', { static: true }) sidenav;
  posts: RedditTopPosts;
  mediaQuery: MediaQueryList;
  listenerRef: any;
  sidenavMode: 'push' | 'side' = 'side';

  constructor(
    private route: ActivatedRoute,
    private mediaMatcher: MediaMatcher
  ) {
  }

  ngOnInit() {
    this.posts = this.route.snapshot.data.posts;
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
}
