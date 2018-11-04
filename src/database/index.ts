import { Sequelize } from 'sequelize-typescript';
import Env from '../utils/Env';
import Log from '../utils/Log';

Log.d('Matching models in sequelize:');
const sequelize = new Sequelize({
  logging: false,
  modelMatch: (filename, member) => {
    const match = filename.substring(0, filename.indexOf('.entity.ts')) === 'default';
    Log.d({ filename, member, match });
    return match;
  },
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

export default class Database {
  public static connect() {
    sequelize.authenticate()
      .then(() => Log.d('Connected to postgres.'))
      .catch((err) => Log.e('Unable to connect to the database: ', err));
  }
}
