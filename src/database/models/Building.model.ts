import { Field, ObjectType } from 'typegql';
import BasicModel from './Basic.model';
import { forField } from './Basic.type';
import BuildingEntity from './Building.entity';
import BuildingType from './Building.type';

@ObjectType({
  description: BuildingType.META.objectDescription,
})
export default class BuildingModel extends BasicModel implements BuildingType {

  @Field(forField(BuildingType.META, 'name'))
  public name: string;

  @Field(forField(BuildingType.META, 'address'))
  public address: string;

  constructor(entity: BuildingEntity) {
    super(entity);
    this.name = entity.name;
    this.address = entity.address;
  }

}
