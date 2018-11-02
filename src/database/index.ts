import { Sequelize } from 'sequelize-typescript';
import Env from '../utils/Env';
import Log from '../utils/Log';

const sequelize = new Sequelize({
  logging: false,
  modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
  },
  modelPaths: [`${__dirname}/models/*.model.ts`],
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

export default class Database {
  public static connect() {
    sequelize.authenticate()
      .then(() => Log.d('Connected to postgres.'))
      .catch((err) => Log.e('Unable to connect to the database: ', err));
  }
}
