import { Column, DataType, Model } from 'sequelize-typescript';
import { Field, ObjectType } from 'typegql';
import GraphQLBigInt from '../../../_types/GraphQLBigInt';
import { ModelMetadata } from '../../../_types/ModelMetadata';

export const META: ModelMetadata = {
  tableName: '',
  objectDescription: 'Basic entity, this should never be visvible to clients',
  nullable: {
    id: false,
    createdAt: false,
    updatedAt: false,
    deletedAt: true,
  },
  comments: {
    id: 'Primary key and unique identifier',
    createdAt: 'The time in ms when this object was created',
    updatedAt: 'The time in ms when this object was last updated',
    deletedAt: 'The time in ms when this object was deleted',
  },
  types: {
    id: DataType.BIGINT,
    createdAt: DataType.BIGINT,
    updatedAt: DataType.BIGINT,
    deletedAt: DataType.BIGINT,
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
    allowNull: META.nullable.id,
    autoIncrement: true,
    comment: META.comments.id,
    primaryKey: true,
    type: META.types.id,
  })
  public id: string;

  @Column({
    allowNull: META.nullable.createdAt,
    comment: META.comments.createdAt,
    type: META.types.createdAt,
  })
  public createdAt: string;

  @Column({
    allowNull: META.nullable.updatedAt,
    comment: META.comments.updatedAt,
    type: META.types.updatedAt,
  })
  public updatedAt: string;

  @Column({
    allowNull: META.nullable.deletedAt,
    comment: META.comments.deletedAt,
    type: META.types.deletedAt,
  })
  public deletedAt: string | undefined;

}

// GraphQL Object

@ObjectType({ description: META.objectDescription })
export class Basic implements BasicType {
  @Field({
    description: META.comments.id,
    isNullable: META.nullable.id,
    type: GraphQLBigInt,
  })
  public id: string;

  @Field({
    description: META.comments.createdAt,
    isNullable: META.nullable.createdAt,
    type: GraphQLBigInt,
  })
  public createdAt: string;

  @Field({
    description: META.comments.updatedAt,
    isNullable: META.nullable.updatedAt,
    type: GraphQLBigInt,
  })
  public updatedAt: string;

  @Field({
    description: META.comments.deletedAt,
    isNullable: META.nullable.deletedAt,
    type: GraphQLBigInt,
  })
  public deletedAt: string | undefined;

  constructor(entity: BasicType) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
    this.deletedAt = entity.deletedAt;
  }
}
