import React, { useState, useEffect } from 'react';
import { TextField } from 'components/textField/TextField';
import type { TodoItem } from 'store/slices/todoSlice';
import { useTodoDispatch } from 'hooks/hooks';
import { putRequest } from 'store/todoThunks/putRequest';

interface TodoProps {
  todo: TodoItem;
}
export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [todoComplete, setTodoComplete] = useState<boolean>(todo.isComplete);
  const handleTodoComplete = () => {
    setTodoComplete((isComplete) => !isComplete);
  };
  // put request for completing todo
  const dispatch = useTodoDispatch();
  useEffect(() => {
    const newTodoState = {
      id: todo.id,
      isComplete: todoComplete,
    };
    dispatch(putRequest(newTodoState));
  }, [todoComplete]);

  return (
    <>
      <TextField
        isComplete={todoComplete}
        onClick={handleTodoComplete}
      >
        {todo.content}
      </TextField>
    </>
  );
};
