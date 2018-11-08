import { Sequelize } from 'sequelize-typescript';
import Env from '../utils/Env';
import Log from '../utils/Log';

export const sequelize = new Sequelize({
  logging: false,
  modelPaths: [`${__dirname}/models/*.entity.ts`],
  operatorsAliases: false,

  database: Env.database.name,
  dialect: 'postgres',
  host: Env.database.host,
  password: Env.database.password,
  port: Env.database.port,
  username: Env.database.username,

  dialectOptions: {
    useUTC: true, // For reading from database
  },
  timezone: '+00:00', // For writing to database
});

const Database = {
  connect: () => {
    sequelize.authenticate().then(() => {
      Log.d('Connected to postgres');
    }).catch((err) => {
      Log.e('Failed to connect to postgres', err);
    });
  },
};

export default Database;
