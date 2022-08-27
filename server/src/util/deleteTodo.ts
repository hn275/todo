import type { TodoParamRequest } from '../types/types';
import type { Response } from 'express';
import data from '../data.json';
import { writeFile } from './writeFile';

export const deleteTodo = (req: TodoParamRequest, res: Response) => {
  const todoIndex = req.todoIndex;
  data.todoList.splice(todoIndex!, 1);
  writeFile(data);
  res.json(data);
};
