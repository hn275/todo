import { useTodoSelector } from 'hooks/hooks';
import { useEffect } from 'react';
import { TextField } from 'components/textField/TextField';
import { TodoListView } from './TodoListView';
import type { TodoItem } from 'store/slices/todoSlice';

export const TodoList = () => {
  const todoList: TodoItem[] = useTodoSelector((state) => state.todo.todoList);

  // TSX
  return (
    <>
      <TodoListView todo={todoList} />
    </>
  );
};
