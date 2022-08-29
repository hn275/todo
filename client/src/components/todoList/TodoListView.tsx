import React, { useState } from 'react';
import type { TodoItem } from 'store/slices/todoSlice';
import { TextField } from 'components/textField/TextField';
import { useTodoDispatch } from 'hooks/hooks';
import { putRequest } from 'store/todoThunks/putRequest';
import { Todo } from './Todo';

interface TodoListViewProps {
  todo: TodoItem[];
}

export const TodoListView: React.FC<TodoListViewProps> = ({ todo }) => {
  // Dispatch action
  const dispatch = useTodoDispatch();

  // Get all todo items and render them through TextField component
  const getAllTodoItems = () => {
    return todo.map((todoItem: TodoItem) => {
      // handle complete, toggle `isComplete` property in `todoItem`
      const handleComplete = () => {
        const isComplete = !todoItem.isComplete; // BUG: it aint toggling
        console.log(todoItem.isComplete);
        dispatch(putRequest({ id: todoItem.id, isComplete: isComplete }));
      };
      return (
        <TextField
          onClick={handleComplete}
          key={todoItem.id}
          isComplete={todoItem.isComplete}
        >
          {todoItem.content}
        </TextField>
      );
    });
  };

  // TSX
  return <div className='todo-item-container'>{getAllTodoItems()}</div>;
};
