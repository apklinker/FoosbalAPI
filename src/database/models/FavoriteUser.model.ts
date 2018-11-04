import { Field, ObjectType } from 'typegql';
import BasicModel from './Basic.model';
import { forField } from './Basic.type';
import FavoriteUserEntity from './FavoriteUser.entity';
import FavoriteUserType from './FavoriteUser.type';

@ObjectType({
  description: FavoriteUserType.META.objectDescription,
})
export default class FavoriteUserModel extends BasicModel implements FavoriteUserType {

  @Field(forField(FavoriteUserType.META, 'userId'))
  public userId: string;

  @Field(forField(FavoriteUserType.META, 'favoritedUserId'))
  public favoritedUserId: string;

  constructor(entity: FavoriteUserEntity) {
    super(entity);

    this.userId = entity.userId;
    this.favoritedUserId = entity.favoritedUserId;
  }

}
