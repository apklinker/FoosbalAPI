import { Column, HasMany, Table } from 'sequelize-typescript';
import { Field, ObjectType } from 'typegql';
import { ModelMetadata } from '../../../_types/ModelMetadata';
import TypeString255 from '../../../_types/TypeString255';
import BasicEntity, { Basic, BasicType } from './Basic';
import UserEntity, { User } from './User.model';

export const META: ModelMetadata = {
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

// Abstract Definition

export abstract class BuildingType extends BasicType {
  public name: string;
  public address: string;
}

// Database Entity

@Table({ paranoid: true, modelName: META.tableName, timestamps: false })
export default class BuildingEntity extends BasicEntity<BuildingEntity> implements BuildingType {

  // Properties

  @Column({
    allowNull: META.items.name.nullable,
    comment: META.items.name.comment,
    type: META.items.name.type.db,
  })
  public name: string;

  @Column({
    allowNull: META.items.address.nullable,
    comment: META.items.address.comment,
    type: META.items.address.type.db,
  })
  public address: string;

  // Associations

  @HasMany(() => UserEntity)
  public users: UserEntity[];

}

// GraphQL Object

@ObjectType({ description: META.objectDescription })
export class Building extends Basic implements BuildingType {

  @Field({
    isNullable: META.items.name.nullable,
    description: META.items.name.comment,
    type: META.items.name.type.gql,
  })
  public name: string;

  @Field({
    isNullable: META.items.address.nullable,
    description: META.items.address.comment,
    type: META.items.address.type.gql,
  })
  public address: string;

  constructor(entity: BuildingEntity) {
    super(entity);
    this.name = entity.name;
    this.address = entity.address;
  }

}
