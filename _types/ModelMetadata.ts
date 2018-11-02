import sequelize = require('sequelize');

export interface ModelMetadata {
  tableName: string;
  objectDescription: string;
  nullable: {
    [key: string]: boolean;
  };
  comments: {
    [key: string]: string;
  };
  types: {
    [key: string]: sequelize.DataTypeAbstract;
  };
}
