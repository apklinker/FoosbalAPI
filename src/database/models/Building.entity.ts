import { Column, HasMany, Table } from 'sequelize-typescript';
import BasicEntity from './Basic._entity';
import { forColumn } from './Basic.type';
import BuildingType from './Building.type';
import UserEntity from './User.entity';

@Table({
  paranoid: true,
  modelName: BuildingType.META.tableName,
  timestamps: false,
})
export default class BuildingEntity extends BasicEntity<BuildingEntity> implements BuildingType {

  // Properties

  @Column(forColumn(BuildingType.META, 'name'))
  public name: string;

  @Column(forColumn(BuildingType.META, 'address'))
  public address: string;

  // Associations

  @HasMany(() => UserEntity)
  public users: UserEntity[];

}
