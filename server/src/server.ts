import express from 'express';
import { v4 as uuid } from 'uuid';
import cors from 'cors';
import { Request, Response, NextFunction } from 'express';
import { writeFile } from './util/writeFile';
import type { RequestError, Todo } from './types/types';
import data from './data.json';

import { postTodo } from './util/postTodo';
const PORT = process.env.PORT || 4000; // port

const app = express();
app.use(cors());
app.use(express.json());

/* POST */
app.post('/', postTodo);

/* PUT */
// Handle params
interface TodoParamRequest extends Request {
  todoIndex?: number;
}
app.param(
  'id',
  (req: TodoParamRequest, res: Response, next: NextFunction, id: string) => {
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
  }
);
app.put('/:id', (req: TodoParamRequest, res: Response) => {
  // get params and query
  const todoIndex = req.todoIndex;
  const { isComplete, isActive } = req.query;
  // update todo
  const updatedTodo: Todo = data.todoList[todoIndex as number];
  if (isComplete) updatedTodo.isComplete = isComplete as string;
  if (isActive) updatedTodo.isActive = isActive as string;
  writeFile(data);
  res.json(data);
});

/* DELETE */
app.delete('/:id', (req: TodoParamRequest, res: Response) => {
  const todoIndex = req.todoIndex;
  data.todoList.splice(todoIndex!, 1);
  writeFile(data);
  res.json(data);
});

/* ERROR HANDLING */
app.use(
  (err: RequestError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.send(`${err.status}: ${err.message}`);
  }
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
