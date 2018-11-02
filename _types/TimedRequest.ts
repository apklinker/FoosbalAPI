import { Response } from 'express';

export interface TimedResponse extends Response {
  receivedAt: number;
}
