import { BelongsTo, Column, ForeignKey, Table } from 'sequelize-typescript';
import { Field, ObjectType } from 'typegql';
import { ModelMetadata } from '../../../_types/ModelMetadata';
import TypeLong from '../../../_types/TypeLong';
import TypeString255 from '../../../_types/TypeString255';
import BasicEntity, {Basic, BasicType } from './Basic';
import BuildingEntity, { Building } from './Building.model';

export const META: ModelMetadata = {
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

// Abstract Definition

export abstract class UserType extends BasicType {
  public firstName: string;
  public lastName: string;
  public buildingId: string;
}

// Database Entity

@Table({ paranoid: true, modelName: META.tableName, timestamps: false })
export default class UserEntity extends BasicEntity<UserEntity> implements UserType {

  // Properties

  @Column({
    allowNull: META.items.firstName.nullable,
    comment: META.items.firstName.comment,
    type: META.items.firstName.type.db,
  })
  public firstName: string;

  @Column({
    allowNull: META.items.lastName.nullable,
    comment: META.items.lastName.comment,
    type: META.items.lastName.type.db,
  })
  public lastName: string;

  // Associations

  @Column({
    allowNull: META.items.buildingId.nullable,
    comment: META.items.buildingId.comment,
    type: META.items.buildingId.type.db,
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
    isNullable: META.items.firstName.nullable,
    description: META.items.firstName.comment,
    type: META.items.firstName.type.gql,
  })
  public firstName: string;

  @Field({
    isNullable: META.items.lastName.nullable,
    description: META.items.lastName.comment,
    type: META.items.lastName.type.gql,
  })
  public lastName: string;

  @Field({
    isNullable: META.items.buildingId.nullable,
    description: META.items.buildingId.comment,
    type: META.items.buildingId.type.gql,
  })
  public buildingId: string;

  // @Field({ type: Building })
  // public building: Building;

  constructor(entity: UserEntity) {
    super(entity);
    this.firstName = entity.firstName;
    this.lastName = entity.lastName;
    this.buildingId = entity.buildingId;
    // this.building = new Building(entity.building);
  }

}
