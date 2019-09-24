import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../posts';
import {
  trigger,
  state,
  animate,
  style,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  animations: [
    trigger('fadeout', [
      state('void', style({ opacity: 1 })),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PostListComponent implements OnInit {
  @Output() doSelect = new EventEmitter<Post>();
  @Output() dismiss = new EventEmitter<Post>();
  @Input() posts: Array<Post>;

  constructor() { }

  ngOnInit() { }

  dismissAction($evt: Event, post: Post) {
    $evt.stopImmediatePropagation();
    $evt.stopPropagation();
    this.dismiss.emit(post);
  }

  selectAction($evt: Event, post: Post) {
    $evt.stopImmediatePropagation();
    $evt.stopPropagation();
    this.doSelect.emit(post);
  }
}
