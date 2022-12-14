import type { Response, NextFunction } from 'express';
import type { TodoParamRequest, Todo, RequestError } from '../types/types';
import data from '../data.json';
import { writeFile } from './writeFile';

export const putTodo = (
  req: TodoParamRequest,
  res: Response,
  next: NextFunction
) => {
  const { id, isComplete } = req.body.data; // requested params
  const todoIndex = data.todoList.findIndex((todo: Todo) => todo.id === id); // requested todo index

  // error handling
  if (todoIndex === -1) {
    const error: RequestError = new Error('No todo found');
    error.status = 404;
    return next(error);
  }

  // update todo
  try {
    // update todo
    const updateTodo: Todo = data.todoList[todoIndex];
    if (updateTodo) {
      updateTodo.isComplete = isComplete;
      writeFile(data);
      res.status(201).json(data.todoList[todoIndex]);
    } else {
      res.status(404).json({});
    }
  } catch (serverError) {
    return next(serverError);
  }
};
