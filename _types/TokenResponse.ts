import admin from 'firebase-admin';
import { TimedResponse } from './TimedRequest';

export interface TokenResponse extends TimedResponse {
  decodedToken: admin.auth.DecodedIdToken;
}
