import type { Request, Response } from 'express';
import data from '../data.json';

export const getTodo = (req: Request, res: Response) => {
  try {
    if (data) res.json(data);
  } catch (error) {
    res.status(404).json({ todoList: [] });
  }
};
