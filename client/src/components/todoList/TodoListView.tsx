import React, { useState } from 'react';
import type { TodoItem } from 'store/slices/todoSlice';
import { TextField } from 'components/textField/TextField';
import { Todo } from './Todo';

interface TodoListViewProps {
  todo: TodoItem[];
}

export const TodoListView: React.FC<TodoListViewProps> = ({ todo }) => {
  // Dispatch action

  // Get all todo items and render them through TextField component
  const getAllTodoItems = () => {
    return todo.map((todoItem: TodoItem) => {
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
