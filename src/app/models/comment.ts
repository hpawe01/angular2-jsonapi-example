import { JsonApiModelConfig, JsonApiModel, Attribute, BelongsTo } from 'angular2-jsonapi';

import { Post } from './post';
import { User } from './user';

@JsonApiModelConfig({
    type: 'comments'
})
export class Comment extends JsonApiModel {

    @Attribute()
    title: string;

    @Attribute()
    createdAt: Date;

    @Attribute()
    updatedAt: Date;

    @BelongsTo()
    post: Post;

    @BelongsTo()
    user: User;
}
