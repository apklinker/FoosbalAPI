import { compileSchema } from 'typegql';
import schemas from './schemas';

export const schema = compileSchema({ roots: schemas });
