// istanbul ignore file
import 'colors';
import Express, { Request, Response } from 'express';
import morgan from 'morgan';

const RequestLogger: any = morgan((tokens: any, req: Express.Request, res: Express.Response) => {
  return [
    tokens.method(req, res).yellow,
    tokens.url(req, res).cyan,
    getStatus(tokens, req, res),
    getTime(tokens, req, res),
  ].join(' ');
});

function getStatus(tokens: morgan.TokenIndexer, req: Request, res: Response): string {
  const code = parseInt(tokens.status(req, res), 10);
  let s = `${code}`;
  if (code < 300) {
    s = s.green;
  } else if (code < 400) {
    s = s.blue;
  } else if (code < 500) {
    s = s.magenta;
  } else {
    s = s.red;
  }
  return '('.reset + s + ')'.reset;
}

function getTime(tokens: morgan.TokenIndexer, req: Request, res: Response): string {
  const time = parseFloat(tokens['response-time'](req, res));
  if (time < 100) { return `${time} ms`.grey; }
  if (time < 300) { return `${time} ms`.reset; }
  if (time < 750) { return `${time} ms`.yellow; }
  return `${time} ms`.red;
}

export default RequestLogger;
