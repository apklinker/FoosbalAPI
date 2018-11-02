import Express from 'express';
import { TimedResponse } from '../../_types/TimedRequest';

export default (req: Express.Request, res: TimedResponse, next: (err?: any) => void) => {
  res.receivedAt = Date.now();
  next();
};
