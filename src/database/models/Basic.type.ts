import { IPartialDefineAttributeColumnOptions } from 'sequelize-typescript';
import { FieldOptions } from 'typegql/types/domains/field';
import { ModelMetadata } from '../../_types/ModelMetadata';
import TypeLong from '../../_types/TypeLong';
import Log from '../../utils/Log';
import BasicEntity from './Basic._entity';
import BasicModel from './Basic.model';

export default abstract class BasicType {
  public static META: ModelMetadata = {
    tableName: '=-=-=-= basic =-=-=-=-=',
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

  public abstract id: string;
  public abstract createdAt: string;
  public abstract updatedAt: string;
  public abstract deletedAt: string | undefined;
}

export function mapNullable<I extends BasicEntity<any>, O extends BasicModel>(
  array: I[],
  mapper: (entity: I) => O,
): O[] {
  return array === null || array === undefined ? [] : array.map(mapper);
}

export function forColumn(
  meta: ModelMetadata,
  columnName: string,
  extraOptions: IPartialDefineAttributeColumnOptions = {},
) {
  return {
    allowNull: meta.items[columnName].nullable,
    comment: meta.items[columnName].comment,
    type: meta.items[columnName].type.db,
    ...extraOptions,
  };
}
export function forField(
  meta: ModelMetadata,
  columnName: string,
  extraOptions: FieldOptions = {},
) {
  return {
    allowNull: meta.items[columnName].nullable,
    comment: meta.items[columnName].comment,
    type: meta.items[columnName].type.gql,
    ...extraOptions,
  };
}
