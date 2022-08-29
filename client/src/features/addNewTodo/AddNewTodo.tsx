import React, { useState } from 'react';
import { TextField } from 'components/textField/TextField';
import { useTodoDispatch } from 'hooks/hooks';
import { handlePostRequest } from 'store/todoThunks/postRequest';
import './AddNewTodo.scss';

interface AddNewTodoProps {}
export const AddNewTodo: React.FC<AddNewTodoProps> = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(() => event.target.value);
  };

  const dispatch = useTodoDispatch();
  const handleSubmit = () => {
    const dispatchNewTodo = { content: newTodo };
    dispatch(handlePostRequest(dispatchNewTodo)); // dispatch action
    setNewTodo(() => ''); // clear input field
  };

  return (
    <>
      <TextField
        onClick={handleSubmit}
        isInputField
      >
        <input
          className='todo-new-input'
          type='text'
          placeholder='Create a new todo...'
          value={newTodo}
          onChange={onInputChange}
        />
      </TextField>
    </>
  );
};
