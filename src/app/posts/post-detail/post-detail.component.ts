import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../posts';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() item: Item;
  constructor() { }

  ngOnInit() {

  }
}
