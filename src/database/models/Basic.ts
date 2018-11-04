import { Column, Model } from 'sequelize-typescript';
import { Field, ObjectType } from 'typegql';
import { ModelMetadata } from '../../../_types/ModelMetadata';
import TypeLong from '../../../_types/TypeLong';

export const META: ModelMetadata = {
  tableName: '',
  objectDescription: 'Basic entity, this should never be visvible to clients',
  items: {
    id: {
      nullable: false,
      comment: 'Primary key and unique identifier',
      type: TypeLong,
    },
    createdAt: {
      nullable: false,
      comment: 'The time in ms when this object was created',
      type: TypeLong,
    },
    updatedAt: {
      nullable: false,
      comment: 'The time in ms when this object was last updated',
      type: TypeLong,
    },
    deletedAt: {
      nullable: true,
      comment: 'The time in ms when this object was deleted',
      type: TypeLong,
    },
  },
};

// Abstract Definition

export abstract class BasicType {
  public abstract id: string;
  public abstract createdAt: string;
  public abstract updatedAt: string;
  public abstract deletedAt: string | undefined;
}

// Database Entity

export default class BasicEntity<T extends BasicEntity<T>> extends Model<T> implements BasicType {

  // Properties

  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: META.items.id.nullable,
    comment: META.items.id.comment,
    type: META.items.id.type.gql,
  })
  public id: string;

  @Column({
    allowNull: META.items.createdAt.nullable,
    comment: META.items.createdAt.comment,
    type: META.items.createdAt.type.db,
  })
  public createdAt: string;

  @Column({
    allowNull: META.items.updatedAt.nullable,
    comment: META.items.updatedAt.comment,
    type: META.items.updatedAt.type.db,
  })
  public updatedAt: string;

  @Column({
    allowNull: META.items.deletedAt.nullable,
    comment: META.items.deletedAt.comment,
    type: META.items.deletedAt.type.db,
  })
  public deletedAt: string | undefined;

}

// GraphQL Object

@ObjectType({ description: META.objectDescription })
export class Basic implements BasicType {

  public static mapUndefined<I extends BasicEntity<any>, O extends Basic>(
    inputArray: I[],
    mapper: (input: I) => O,
  ): O[] {
    return inputArray === undefined ? [] : inputArray.map(mapper);
  }

  @Field({
    description: META.items.id.comment,
    isNullable: META.items.id.nullable,
    type: META.items.id.type.gql,
  })
  public id: string;

  @Field({
    description: META.items.createdAt.comment,
    isNullable: META.items.createdAt.nullable,
    type: META.items.createdAt.type.gql,
  })
  public createdAt: string;

  @Field({
    description: META.items.updatedAt.comment,
    isNullable: META.items.updatedAt.nullable,
    type: META.items.updatedAt.type.gql,
  })
  public updatedAt: string;

  @Field({
    description: META.items.deletedAt.comment,
    isNullable: META.items.deletedAt.nullable,
    type: META.items.deletedAt.type.gql,
  })
  public deletedAt: string | undefined;

  constructor(entity: BasicType) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
    this.deletedAt = entity.deletedAt;
  }

}
