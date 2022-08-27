import { RequestError } from '../types/types';
import type { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: RequestError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500);
  res.send(`${err.status}: ${err.message}`);
};
