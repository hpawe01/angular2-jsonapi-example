import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

import { Comment } from './comment';

@JsonApiModelConfig({
    type: 'posts'
})
export class Post extends JsonApiModel {

    @Attribute()
    title: string;

    @Attribute()
    content: string;

    @Attribute({ serializedName: 'created-at' })
    createdAt: Date;

    @HasMany()
    comments: Comment[];
}
