import { Field, ObjectType } from 'typegql';
import BasicEntity from './Basic._entity';
import BasicType, { forField } from './Basic.type';

@ObjectType({
  description: BasicType.META.objectDescription,
})
export default class BasicModel implements BasicType {

  @Field(forField(BasicType.META, 'id'))
  public id: string;

  @Field(forField(BasicType.META, 'createdAt'))
  public createdAt: string;

  @Field(forField(BasicType.META, 'updatedAt'))
  public updatedAt: string;

  @Field(forField(BasicType.META, 'deletedAt'))
  public deletedAt: string | undefined;

  constructor(entity: BasicType) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
    this.deletedAt = entity.deletedAt;
  }

}
