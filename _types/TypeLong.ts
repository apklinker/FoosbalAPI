import { DataType as SequelizeDataType } from 'sequelize-typescript';
import { DataType } from '.';
import GraphQLBigInt from './GraphQLBigInt';

const TypeLong: DataType<string> = {
  db: SequelizeDataType.BIGINT,
  gql: GraphQLBigInt,
};

export default TypeLong;
