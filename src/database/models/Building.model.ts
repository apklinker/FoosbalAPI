import { Column, DataType, HasMany, Table } from 'sequelize-typescript';
import { Field, ObjectType } from 'typegql';
import { ModelMetadata } from '../../../_types/ModelMetadata';
import BasicEntity, {Basic, BasicType, META as Basic_META} from './Basic';
import User from './User.model';

export const META: ModelMetadata = {
  tableName: 'buildings',
  objectDescription: 'Any Building Sourec Allies is working in',
  nullable: {
    ...Basic_META.nullable,
    name: false,
    address: false,
  },
  comments: {
    ...Basic_META.comments,
    name: 'The name of the building',
    address: 'The building\'s address',
  },
  types: {
    ...Basic_META.types,
    name: DataType.STRING,
    address: DataType.STRING,
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
    allowNull: META.nullable.name,
    comment: META.comments.name,
    type: META.types.name,
  })
  public name: string;

  @Column({
    allowNull: META.nullable.address,
    comment: META.comments.address,
    type: META.types.address,
  })
  public address: string;

  // Associations

  // @HasMany(() => User)
  // public users: User[];

}

// GraphQL Object

@ObjectType({ description: META.objectDescription })
export class Building extends Basic implements BuildingType {

  @Field({
    isNullable: META.nullable.name,
    description: META.comments.name,
  })
  public name: string;

  @Field({
    isNullable: META.nullable.address,
    description: META.comments.address,
  })
  public address: string;

  constructor(entity: BuildingType) {
    super(entity);
    this.name = entity.name;
    this.address = entity.address;
  }

}
