import type { Request } from 'express';

export interface TodoParamRequest extends Request {
  todoIndex?: number;
  ids?: string[];
}

export interface Todo {
  id?: string;
  content: string;
  isComplete: boolean;
}

export interface RequestError extends Error {
  status?: number;
}
