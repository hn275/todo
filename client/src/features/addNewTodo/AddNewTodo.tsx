import React, { useState, useRef, useEffect } from 'react';
import { TextField } from 'components/textField/TextField';
import { useTodoDispatch } from 'hooks/hooks';
import { handlePostRequest } from 'store/todoThunks/postRequest';
import './AddNewTodo.scss';

interface AddNewTodoProps {}
export const AddNewTodo: React.FC<AddNewTodoProps> = () => {
  // handler new todo
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
  // Handling event listener
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    function handleReturnKey(this: HTMLElement, e: KeyboardEvent) {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    }
    inputRef.current!.addEventListener('keypress', handleReturnKey);
    // eslint-disable-next-line
    return () =>
      inputRef.current!.removeEventListener('keypress', handleReturnKey);
  }, []);

  // TSX
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
          ref={inputRef}
        />
      </TextField>
    </>
  );
};
