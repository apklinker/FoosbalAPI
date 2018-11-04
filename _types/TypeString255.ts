import { DataType as SequelizeDataType } from 'sequelize-typescript';
import { DataType } from '.';

const TypeString255: DataType<string> = {
  db: SequelizeDataType.STRING,
  gql: String,
};

export default TypeString255;
