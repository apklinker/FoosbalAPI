import { DataType } from '.';

export interface ModelMetadata {
  tableName: string;
  objectDescription: string;
  items: {
    [key: string]: {
      nullable: boolean;
      comment: string;
      type: DataType<any>;
    },
  };
}
