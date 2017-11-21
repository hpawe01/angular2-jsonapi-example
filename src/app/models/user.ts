import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

import { Comment } from './comment';

@JsonApiModelConfig({
    type: 'users'
})
export class User extends JsonApiModel {

    @Attribute()
    name: string;
    // ...
    @HasMany()
    comment: Comment[];
    @BelongsTo()
    parent: User;
    @HasMany()
    children: User[];
}

