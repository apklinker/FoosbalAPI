import { ModelMetadata } from '../../_types/ModelMetadata';
import TypeString255 from '../../_types/TypeString255';
import BasicType from './Basic.type';

export default abstract class BuildingType extends BasicType {
  public static META: ModelMetadata = {
    tableName: 'buildings',
    objectDescription: 'Any Building Sourec Allies is working in',
    items: {
      name: {
        nullable: false,
        comment: 'The name of the building',
        type: TypeString255,
      },
      address: {
        nullable: false,
        comment: 'The building\'s address',
        type: TypeString255,
      },
    },
  };

  public name: string;
  public address: string;
}
