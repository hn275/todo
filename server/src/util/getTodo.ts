import type { Request, Response } from 'express';
import data from '../data.json';

export const getTodo = (req: Request, res: Response) => {
  res.json(data);
};
