import sequelize = require("sequelize");

declare interface DataType<T> {
  db: sequelize.DataTypeAbstract;
  gql: any;
}