import { Column, Model } from 'sequelize-typescript';
import BasicType, { forColumn } from './Basic.type';

export default class BasicEntity<T extends BasicEntity<T>> extends Model<T> implements BasicType {

  // Properties

  @Column(forColumn(BasicType.META, 'id', {
    primaryKey: true,
    autoIncrement: true,
  }))
  public id: string;

  @Column(forColumn(BasicType.META, 'createdAt'))
  public createdAt: string;

  @Column(forColumn(BasicType.META, 'updatedAt'))
  public updatedAt: string;

  @Column(forColumn(BasicType.META, 'deletedAt'))
  public deletedAt: string | undefined;

}
