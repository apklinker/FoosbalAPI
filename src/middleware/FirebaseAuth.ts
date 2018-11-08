import Express from 'express';
import { auth, credential, initializeApp } from 'firebase-admin';
import { TokenResponse } from '../_types/TokenResponse';
import Env from '../utils/Env';
import HttpStatus from '../utils/HttpStatus';
import Log from '../utils/Log';

// tslint:disable-next-line:no-var-requires
const serviceAccount = require('../../firebase-key.json');

initializeApp({
  credential: credential.cert(serviceAccount),
  databaseURL: 'https://source-foos.firebaseio.com',
});

export function authSuccess(res: TokenResponse, next: (err?: any) => void, token: auth.DecodedIdToken) {
  res.decodedToken = token;
  next();
}

export function authFailure(res: Express.Response, message: string, status: number) {
  res.status(status).send({
    message,
    status,
    type: 'Authorization',
  });
}

export const DEV_TOKEN: auth.DecodedIdToken = {
  aud: 'audience',
  auth_time: 0,
  exp: 0,
  firebase: {
    identities: {
      name: 'Aaron Klinker',
    },
    sign_in_provider: 'sign_in_provider',
  },
  iat: 0,
  iss: 'iss',
  sub: 'sub',
  uid: 'uid',
};

export function middleware(
  success: (res: TokenResponse, next: (err?: any) => void, token: auth.DecodedIdToken) => void,
  error: (res: Express.Response, message: string, status: number) => void,
  verifyIdToken: (idToken: string, checkRevoked?: boolean | undefined) => Promise<auth.DecodedIdToken>,
) {
  return (req: Express.Request, res: Express.Response, next: (err?: any) => void) => {
    const authHeader: string | undefined = req.headers.authorization;
    if (authHeader === undefined || !authHeader.startsWith('Bearer ')) {
      error(
        res,
        'No authentication token provided, set \'Authorization: Bearer <token>\' header.',
        HttpStatus.badReqeust,
      );
      return;
    }

    const token: string = /Bearer\s+(.*)/.exec(authHeader)![1];
    if (authHeader !== undefined && Env.isDev()) {
      if (token === Env.devToken || (req.method === 'GET' && req.path === 'api')) {
        success(res as TokenResponse, next, DEV_TOKEN);
      } else {
        error(res, 'Failed to authenticate against development token', HttpStatus.unauthorized);
      }
      return;
    }

    verifyIdToken(req.headers.authorization as string, false)
      .then((value: auth.DecodedIdToken) => success(res as TokenResponse, next, value))
      .catch((err) => error(res, err, HttpStatus.unauthorized));
  };
}
