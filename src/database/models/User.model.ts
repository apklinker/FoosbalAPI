import { Field, ObjectType } from 'typegql';
import BasicModel from './Basic.model';
import { forField } from './Basic.type';
import BuildingModel from './Building.model';
import UserEntity from './User.entity';
import UserType from './User.type';

@ObjectType({
  description: UserType.META.objectDescription,
})
export default class UserModel extends BasicModel implements UserType {

  @Field(forField(UserType.META, 'firstName'))
  public firstName: string;

  @Field(forField(UserType.META, 'lastName'))
  public lastName: string;

  @Field(forField(UserType.META, 'buildingId'))
  public buildingId: string;

  @Field(forField(UserType.META, 'buildingId', {
    type: BuildingModel,
  }))
  public building: BuildingModel;

  constructor(entity: UserEntity) {
    super(entity);
    this.firstName = entity.firstName;
    this.lastName = entity.lastName;
    this.buildingId = entity.buildingId;
    this.building = new BuildingModel(entity.building);
  }

}
