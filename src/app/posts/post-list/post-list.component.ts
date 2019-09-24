import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item, Post } from '../posts';
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
  @Output() doSelect = new EventEmitter<Item>();
  @Output() doOpen = new EventEmitter<Post>();
  @Output() dismiss = new EventEmitter<Item>();
  @Input() items: Array<Item>;
  constructor() { }

  ngOnInit() { }

  /**
   *  A click on the button triggers the dismiss action
   */
  dismissAction($evt: Event, item: Item) {
    $evt.stopImmediatePropagation();
    $evt.stopPropagation();
    this.dismiss.emit(item);
  }

  /**
   *  A click on the item triggers the select action
   */
  selectAction($evt: Event, item: Item) {
    $evt.stopImmediatePropagation();
    $evt.stopPropagation();
    this.doSelect.emit(item);
  }

  /**
   * It is used to cancel the undesired events when interact with the context menu
   */
  cancel(evt: Event|MouseEvent) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
  }
}
