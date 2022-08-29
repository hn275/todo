import React from 'react';
import { TextField } from 'components/textField/TextField';
import type { TodoItem } from 'store/slices/todoSlice';
import { useTodoDispatch } from 'hooks/hooks';
import { putRequest } from 'store/todoThunks/putRequest';

interface TodoProps {
  todo: TodoItem;
}
export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const dispatch = useTodoDispatch();
  // Toggle todo state
  const handleTodoComplete = () => {
    const newTodoState = {
      id: todo.id,
      isComplete: !todo.isComplete,
    };
    dispatch(putRequest(newTodoState));
  };

  return (
    <>
      <TextField
        isComplete={todo.isComplete}
        onClick={handleTodoComplete}
      >
        {todo.content}
      </TextField>
    </>
  );
};
