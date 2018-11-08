import { Field, ObjectType } from 'typegql';
import Log from '../../utils/Log';
import BasicModel from './Basic.model';
import BasicType, { forField, mapNullable } from './Basic.type';
import BuildingEntity from './Building.entity';
import BuildingType from './Building.type';
import UserEntity from './User.entity';
import UserModel from './User.model';

@ObjectType({
  description: BuildingType.META.objectDescription,
})
export default class BuildingModel extends BasicModel implements BuildingType {

  @Field(forField(BuildingType.META, 'name'))
  public name: string;

  @Field(forField(BuildingType.META, 'address'))
  public address: string;

  @Field({ type: () => [UserModel] })
  public users: UserModel[];

  constructor(entity: BuildingEntity) {
    super(entity);

    this.name = entity.name;
    this.address = entity.address;

    this.users = mapNullable(
      entity.users,
      // istanbul ignore next
      (e: UserEntity) => new UserModel(e),
    );
  }

}
