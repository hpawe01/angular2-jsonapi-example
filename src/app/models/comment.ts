import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

import { Post } from './post';
import { User } from './user';

@JsonApiModelConfig({
    type: 'comments'
})
export class Comment extends JsonApiModel {

    @Attribute()
    title: string;

    @Attribute()
    created_at: Date;

    @BelongsTo()
    post: Post;

    @BelongsTo()
    user: User;
}
