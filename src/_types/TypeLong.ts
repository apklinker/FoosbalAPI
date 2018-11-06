import GraphQLBigInt from 'graphql-bigint';
import { DataType as SequelizeDataType } from 'sequelize-typescript';
import { DataType } from '.';

const TypeLong: DataType<string> = {
  db: SequelizeDataType.BIGINT,
  gql: GraphQLBigInt,
};

export default TypeLong;
