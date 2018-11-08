import { Column, ForeignKey, Table } from 'sequelize-typescript';
import BasicEntity from './Basic._entity';
import { forColumn } from './Basic.type';
import FavoriteUserType from './FavoriteUser.type';
import UserEntity from './User.entity';

@Table({
  paranoid: true,
  modelName: FavoriteUserType.META.tableName,
  timestamps: false,
})
export default class FavoriteUserEntity extends BasicEntity<FavoriteUserEntity> implements FavoriteUserType {

  // Properties

  // Associations

  @Column(forColumn(FavoriteUserType.META, 'userId'))
  @ForeignKey(
    // istanbul ignore next
    () => UserEntity,
  )
  public userId: string;

  @Column(forColumn(FavoriteUserType.META, 'favoritedUserId'))
  @ForeignKey(
    // istanbul ignore next
    () => UserEntity,
  )
  public favoritedUserId: string;

}
