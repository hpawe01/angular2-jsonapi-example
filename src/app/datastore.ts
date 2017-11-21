import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';

import { User } from './models/user';
import { Post } from './models/post';
import { Comment } from './models/comment';

@Injectable()
@JsonApiDatastoreConfig({
  baseUrl: 'http://localhost:4000',
  models: {
    users: User,
    posts: Post,
    comments: Comment,
  }
})
export class Datastore extends JsonApiDatastore {

  constructor(http: Http) {
    super(http);
  }

}
