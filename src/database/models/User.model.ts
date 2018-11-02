import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { Field, ObjectType } from 'typegql';
import GraphQLBigInt from '../../../_types/GraphQLBigInt';
import { ModelMetadata } from '../../../_types/ModelMetadata';
import BasicEntity, {Basic, BasicType, META as Basic_META} from './Basic';
import BuildingEntity, { Building, BuildingType } from './Building.model';

export const META: ModelMetadata = {
  tableName: 'users',
  objectDescription: 'Any Building Sourec Allies is working in',
  nullable: {
    ...Basic_META.nullable,
    firstName: false,
    lastName: false,
    buildingId: false,
  },
  comments: {
    ...Basic_META.comments,
    firstName: 'The user\'s first name',
    lastName: 'The user\'s last name',
    buildingId: 'The id of the user\'s building they work in',
  },
  types: {
    ...Basic_META.types,
    firstName: DataType.STRING,
    lastName: DataType.STRING,
    buildingId: DataType.BIGINT,
  },
};

// Abstract Definition

export abstract class UserType extends BasicType {
  public firstName: string;
  public lastName: string;
  public buildingId: string;
  public building: BuildingType;
}

// Database Entity

@Table({ paranoid: true, modelName: META.tableName, timestamps: false })
export default class UserEntity extends BasicEntity<UserEntity> implements UserType {

  // Properties

  @Column({
    allowNull: META.nullable.firstName,
    comment: META.comments.firstName,
    type: META.types.firstName,
  })
  public firstName: string;

  @Column({
    allowNull: META.nullable.lastName,
    comment: META.comments.lastName,
    type: META.types.lastName,
  })
  public lastName: string;

  // Associations

  @Column({
    allowNull: META.nullable.buildingId,
    comment: META.comments.buildingId,
    type: META.types.buildingId,
  })
  @ForeignKey(() => BuildingEntity)
  public buildingId: string;

  @BelongsTo(() => BuildingEntity)
  public building: BuildingEntity;

}

// GraphQL Object

@ObjectType({ description: META.objectDescription })
export class User extends Basic implements UserType {

  @Field({
    isNullable: META.nullable.firstName,
    description: META.comments.firstName,
  })
  public firstName: string;

  @Field({
    isNullable: META.nullable.lastName,
    description: META.comments.lastName,
  })
  public lastName: string;

  @Field({
    isNullable: META.nullable.buildingId,
    description: META.comments.buildingId,
    type: GraphQLBigInt,
  })
  public buildingId: string;

  @Field({
    isNullable: META.nullable.buildingId,
    description: META.comments.buildingId,
    type: Building,
  })
  public building: Building;

  constructor(entity: UserType) {
    super(entity);
    this.firstName = entity.firstName;
    this.lastName = entity.lastName;
    this.buildingId = entity.buildingId;
    this.building = new Building(entity.building);
  }

}
