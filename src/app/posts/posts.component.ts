import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditTopPosts } from './posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: RedditTopPosts;

  constructor(private route: ActivatedRoute) {
    this.posts = this.route.snapshot.data.posts;
  }

  ngOnInit() {
  }

}
