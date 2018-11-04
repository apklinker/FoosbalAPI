import { RequestHandler } from 'express';

import FirebaseAuth from './FirebaseAuth';
import RequestLogger from './RequestLogger';

const middleware: RequestHandler[] = [
  RequestLogger,
  FirebaseAuth,
];

export default middleware;
