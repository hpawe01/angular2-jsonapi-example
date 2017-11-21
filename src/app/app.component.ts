import { Component, OnInit } from '@angular/core';
import { Datastore } from './datastore';

import { Comment } from './models/comment';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private datastore: Datastore) { }
  ngOnInit() {
    this.datastore.query(Post)
      .subscribe((items) => console.log(items));
  }
}
