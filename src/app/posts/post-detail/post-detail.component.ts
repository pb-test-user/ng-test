import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item , Post} from '../posts';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  @Input() item: Item;
  @Output() doOpen = new EventEmitter<Post>();

  constructor() { }

  /**
   *  A click on image triggers the open action
   */
  openAction($event: Event, post: Post) {
    $event.stopImmediatePropagation();
    this.doOpen.emit(post);
  }

  /**
   * It is used to cancel the undesired events when interact with the context menu
   */
  cancel(evt: Event|MouseEvent) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
  }
}
