import 'colors';
import Express from 'express';
import ExpressGraphQL from 'express-graphql';
import { schema } from './graphql';
import middleware from './middleware';
import Env from './utils/Env';
import Log from './utils/Log';

class Server {
  public expressApp: Express.Application;

  constructor() {
    this.expressApp = Express();
  }

  public start = (port: number) => {
    this.setupMiddleware();
    this.setupRoutes();
    this.expressApp.listen(port, this.onListen(port));
  }

  public setupMiddleware = () => {
    this.expressApp.use(middleware);
  }

  public setupRoutes = () => {
    const graphiql = Env.isDev();
    this.expressApp.use('/api', ExpressGraphQL({ graphiql, schema }));
  }

  public onListen = (port: number) => () => {
    if (Env.isDev()) {
      const hostname = `http://localhost:${port}`.green;
      Log.d(`Started server on [${hostname}/${'api'.yellow}]`);
      Log.d(`Started GraphIQL on [${hostname}/${'graphiql'.yellow}]`);
    }
  }
}

export default new Server();
