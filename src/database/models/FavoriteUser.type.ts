import { ModelMetadata } from '../../../_types/ModelMetadata';
import TypeLong from '../../../_types/TypeLong';
import BasicType from './Basic.type';

export default abstract class FavoriteUserType extends BasicType {
  public static META: ModelMetadata = {
    tableName: 'favorite_users',
    objectDescription: 'Many-to-many relationship object relating a user to their facvorites',
    items: {
      userId: {
        nullable: false,
        comment: 'The id of a user who has at least one favorite',
        type: TypeLong,
      },
      favoritedUserId: {
        nullable: false,
        comment: 'The id of the user that the userId user has favorited',
        type: TypeLong,
      },
    },
  };

  public userId: string;
  public favoritedUserId: string;
}
