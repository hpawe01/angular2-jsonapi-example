import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

import { Comment } from './comment';
import { User } from './user';

@JsonApiModelConfig({
    type: 'posts'
})
export class Post extends JsonApiModel {

    @Attribute()
    title: string;

    @Attribute()
    content: string;

    @Attribute()
    createdAt: Date;

    @Attribute()
    updatedAt: Date;

    @HasMany()
    comments: Comment[];

    @BelongsTo()
    author: User;
}
