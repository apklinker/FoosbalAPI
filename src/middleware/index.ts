import { RequestHandler } from 'express';

import { auth } from 'firebase-admin';
import {authFailure, authSuccess, middleware as FirebaseAuth } from './FirebaseAuth';
import RequestLogger from './RequestLogger';

const middleware: RequestHandler[] = [
  RequestLogger,
  FirebaseAuth(authSuccess, authFailure, auth().verifyIdToken),
];

export default middleware;
