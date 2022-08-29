import { useTodoSelector } from 'hooks/hooks';
import { useEffect } from 'react';
import { TextField } from 'components/textField/TextField';
import { TodoListView } from './TodoListView';
import type { TodoItem } from 'store/slices/todoSlice';
import type { Filter } from 'store/slices/filterSlice';

export const TodoList = () => {
  const todoList = useTodoSelector((state) => state.todo.todoList);
  const todoFilter = useTodoSelector((state) => state.filter.filter);

  // TSX
  return (
    <>
      <TodoListView todo={todoList} />
    </>
  );
};
