import { BelongsTo, Column, ForeignKey, Table } from 'sequelize-typescript';
import BasicEntity from './Basic._entity';
import { forColumn } from './Basic.type';
import BuildingEntity from './Building.entity';
import UserType from './User.type';

@Table({
  paranoid: true,
  modelName: UserType.META.tableName,
  timestamps: false,
})
export default class UserEntity extends BasicEntity<UserEntity> implements UserType {

  // Properties

  @Column(forColumn(UserType.META, 'firstName'))
  public firstName: string;

  @Column(forColumn(UserType.META, 'lastName'))
  public lastName: string;

  // Associations

  @Column(forColumn(UserType.META, 'buildingId'))
  @ForeignKey(() => BuildingEntity)
  public buildingId: string;

  @BelongsTo(() => BuildingEntity)
  public building: BuildingEntity;

}
