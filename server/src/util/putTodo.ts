import type { Response } from 'express';
import type { TodoParamRequest, Todo } from '../types/types';
import data from '../data.json';
import { writeFile } from './writeFile';

export const putTodo = (req: TodoParamRequest, res: Response) => {
  // get params and query
  const todoIndex = req.todoIndex;
  const isComplete: boolean = req.query.isComplete === 'true' ? true : false;
  const isActive: boolean = req.query.isActive === 'true' ? true : false;
  // update todo
  const updatedTodo: Todo = data.todoList[todoIndex as number];
  if (isComplete) updatedTodo.isComplete = isComplete as unknown as boolean;
  if (isActive) updatedTodo.isActive = isActive as unknown as boolean;
  writeFile(data);
  res.json(data);
};
