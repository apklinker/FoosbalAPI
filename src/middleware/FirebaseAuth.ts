import Express from 'express';
import * as admin from 'firebase-admin';
import { TokenResponse } from '../_types/TokenResponse';
import Env from '../utils/Env';
import HttpStatus from '../utils/HttpStatus';

// tslint:disable-next-line:no-var-requires
const serviceAccount = require('../../firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://source-foos.firebaseio.com',
});

function authSuccess(res: TokenResponse, next: (err?: any) => void) {
  return (token: admin.auth.DecodedIdToken) => {
    res.decodedToken = token;
    next();
  };
}

function authFailure(res: Express.Response, next: (err?: any) => void) {
  return (message: string, status: number) => {
    res.status(status).send({
      message,
      status,
      type: 'Authorization',
    });
  };
}

const DEV_TOKEN: admin.auth.DecodedIdToken = {
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

export default (req: Express.Request, res: Express.Response, next: (err?: any) => void) => {
  const success = authSuccess(res as TokenResponse, next);
  const error = authFailure(res, next);

  const authHeader: string | undefined = req.headers.authorization;
  if (authHeader !== undefined) {
    const token: string = authHeader.split(/\s/)[1];
    if (Env.isDev()) {
      if (token === Env.devToken || (req.method === 'GET' && req.path === 'api')) {
        success(DEV_TOKEN);
      } else {
        error('Failed to authenticate against development token', HttpStatus.unauthorized);
      }
    } else if (authHeader.startsWith('bearer')) {
      admin.auth().verifyIdToken(req.headers.authorization as string, false)
        .then((value: admin.auth.DecodedIdToken) => success(value))
        .catch((err) => error(err, HttpStatus.unauthorized));
    }
  } else {
    error('No authentication token provided, set \'Authorization: bearer <token>\' header.', HttpStatus.badReqeust);
  }
};
