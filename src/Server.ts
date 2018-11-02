import 'colors';
import Express from 'express';
import ExpressGraphQL from 'express-graphql';
import { schema } from './graphql';
import middleware from './middleware';
import Env from './utils/Env';
import Log from './utils/Log';

export default class Server {
  private port: number;
  private expressApp: Express.Application;

  constructor(port: number) {
    this.port = port;
    this.expressApp = Express();
  }

  public start = () => {
    this.setupMiddleware();
    this.setupRoutes();
    this.expressApp.listen(this.port, this.onListen);
  }

  private setupMiddleware = () => {
    this.expressApp.use(middleware);
  }

  private setupRoutes = () => {
    const graphiql = Env.isDev();
    this.expressApp.use('/api', ExpressGraphQL({ graphiql, schema }));
  }

  private onListen = () => {
    if (Env.isDev()) {
      const hostname = `http://localhost:${this.port}`.green;
      Log.d(`Started server on [${hostname}/${'api'.yellow}]`);
      Log.d(`Started GraphIQL on [${hostname}/${'graphiql'.yellow}]`);
    }
  }
}
