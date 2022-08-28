import type { TodoParamRequest } from '../types/types';
import type { Response } from 'express';
import data from '../data.json';
import { writeFile } from './writeFile';

export const deleteTodo = (req: TodoParamRequest, res: Response) => {
  const ids = req.body.ids;
  // data.todoList.splice(todoIndex!, 1);
  const newList = data.todoList.filter((todo) => {
    return !ids.includes(todo.id);
  });
  data.todoList = newList;
  writeFile(data);
  res.json(data);
};
