import type { TodoParamRequest, RequestError, Todo } from '../types/types';
import type { Response, NextFunction } from 'express';
import data from '../data.json';

export const paramHandler = (
  req: TodoParamRequest,
  res: Response,
  next: NextFunction,
  id: string
) => {
  // find index
  const todoIndex = data.todoList.findIndex((todo: Todo): boolean => {
    return todo.id === id;
  });
  if (todoIndex !== -1) {
    req.todoIndex = todoIndex;
    next();
  } else {
    const error: RequestError = new Error('no todo item found');
    error.status = 400;
    next(error);
  }
};
