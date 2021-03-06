import { Component, OnInit } from '@angular/core';
import { Datastore } from './datastore';

import { Comment } from './models/comment';
import { Post } from './models/post';
import { User } from './models/user';

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
      .subscribe((items) => console.log('Example 1) All posts:', items));
    this.datastore.query(Comment, {
        include: 'post',
      })
      .subscribe((items) => console.log('Example 2) All comments including post', items));
    this.datastore.query(User, {
        include: 'posts',
      })
      .subscribe((items) => console.log('Example 3) All users including posts', items));
    this.datastore.findRecord(Post, '1')
      .subscribe((item) => console.log('Example 4) Specific post', item));
    // Example from https://github.com/ghidoz/angular2-jsonapi#querying-records
    this.datastore.findAll(Post, {
      // page: { size: 10, number: 1 },
      include: 'comments',
    }).subscribe(
      (document) => {
        console.log('Example 5) All posts including comments (Meta)', document.getMeta()); // metadata
        console.log('Example 5) All posts including comments (Models)', document.getModels()); // models
      }
    );

  }
}
