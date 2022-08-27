export interface Todo {
  id?: string;
  content: string;
  isComplete: string | boolean;
  isActive: string | boolean;
}

export interface RequestError extends Error {
  status?: number;
}
