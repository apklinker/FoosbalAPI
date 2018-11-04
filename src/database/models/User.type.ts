import { ModelMetadata } from '../../../_types/ModelMetadata';
import TypeLong from '../../../_types/TypeLong';
import TypeString255 from '../../../_types/TypeString255';
import BasicType from './Basic.type';

export default abstract class UserType extends BasicType {
  public static META: ModelMetadata = {
    tableName: 'users',
    objectDescription: 'Any Building Sourec Allies is working in',
    items: {
      firstName: {
        nullable: false,
        comment: 'The user\'s first name',
        type: TypeString255,
      },
      lastName: {
        nullable: false,
        comment: 'The user\'s last name',
        type: TypeString255,
      },
      buildingId: {
        nullable: false,
        comment: 'The id of the user\'s building they work in',
        type: TypeLong,
      },
    },
  };
  public firstName: string;
  public lastName: string;
  public buildingId: string;
}
