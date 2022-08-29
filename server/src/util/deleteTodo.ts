import type { TodoParamRequest, Todo } from '../types/types';
import type { Response } from 'express';
import data from '../data.json';
import { writeFile } from './writeFile';

export const deleteTodo = (req: TodoParamRequest, res: Response) => {
  const ids = req.body.ids;
  const newList = data.todoList.filter((todo: Todo) => {
    return !ids.includes(todo.id);
  });
  data.todoList = newList;
  writeFile(data);
  res.json(data);
};
