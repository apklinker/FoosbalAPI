import { GraphQLInt } from 'graphql';
import { DataType as SequelizeDataType } from 'sequelize-typescript';
import { DataType } from '.';

const TypeInt: DataType<number> = {
  db: SequelizeDataType.INTEGER,
  gql: GraphQLInt,
};

export default TypeInt;
