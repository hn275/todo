import React from 'react';
import type { TodoItem } from 'store/slices/todoSlice';
import type { Filter } from 'store/slices/filterSlice';
import { Todo } from './Todo';
import { useTodoSelector } from 'hooks/hooks';
import { todoFiltered } from './todoFiltered';

interface TodoListViewProps {
  todo: TodoItem[];
}

export const TodoListView: React.FC<TodoListViewProps> = ({ todo }) => {
  // Get filter
  const filter: Filter = useTodoSelector((state) => state.filter.filter);
  const todoList = todoFiltered(filter, todo);

  // Get all todo items and render them through TextField component
  const getAllTodoItems = () => {
    return todoList!.map((todoItem: TodoItem) => {
      return (
        <Todo
          key={todoItem.id}
          todo={todoItem}
        />
      );
    });
  };

  // TSX
  return <div className='todo-item-container'>{getAllTodoItems()}</div>;
};
