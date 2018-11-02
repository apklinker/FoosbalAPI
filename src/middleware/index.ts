import { RequestHandler } from 'express';

import FirebaseAuth from './FirebaseAuth';
import PingTimer from './PingTimer';
import RequestLogger from './RequestLogger';

const middleware: RequestHandler[] = [
  PingTimer,
  RequestLogger,
  FirebaseAuth,
];

export default middleware;
