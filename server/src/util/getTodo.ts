import type { Request, Response } from 'express';
import data from '../data.json';

export const getTodo = (req: Request, res: Response) => {
  try {
    res.json(data);
  } catch (error) {
    console.log('to do list currently empty');
    res.json({ todoList: [] });
  }
};
