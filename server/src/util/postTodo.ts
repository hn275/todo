import type { Request, Response, NextFunction } from 'express';
import type { RequestError, Todo } from '../types/types';
import { v4 as uuid } from 'uuid';
import { writeFile } from './writeFile';
import data from '../data.json';

export const postTodo = (req: Request, res: Response, next: NextFunction) => {
  const { todo } = req.body;
  // error handling
  if (!todo) {
    const error: RequestError = new Error(
      'bad request, request body needs to have { "todo": "todo task" }'
    );
    error.status = 400;
    return next(error);
  }
  // add new todo to json
  const newTodo: Todo = {
    id: uuid(),
    content: todo,
    isComplete: false,
    isActive: false,
  };
  data.todoList.push(newTodo as never);
  writeFile(data);
  res.status(201).json(newTodo);
};
