import 'reflect-metadata';
import Database from './database';
import server from './Server';
import Env from './utils/Env';

export default () => {
  Database.connect();
  server.start(Env.server.port);
};
