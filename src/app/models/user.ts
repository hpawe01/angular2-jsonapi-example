import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany } from 'angular2-jsonapi';

import { Comment } from './comment';
import { Post } from './post';

@JsonApiModelConfig({
    type: 'users'
})
export class User extends JsonApiModel {

    @Attribute()
    name: string;

    @Attribute()
    createdAt: Date;

    @Attribute()
    updatedAt: Date;

    @HasMany()
    posts: Post[];

    @HasMany()
    comments: Comment[];
}

