import 'reflect-metadata';
import Database from './database';
import Server from './Server';
import Env from './utils/Env';

Database.connect();

const server = new Server(Env.server.port);
server.start();
