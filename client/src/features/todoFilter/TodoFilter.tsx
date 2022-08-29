import { MouseEventHandler } from 'react';
import { setFilter } from 'store/slices/filterSlice';
import { useTodoDispatch } from 'hooks/hooks';
import type { Filter } from 'store/slices/filterSlice';
import { TodoFilterOption } from './TodoFilterOption';

export const TodoFilter = () => {
  const dispatch = useTodoDispatch(); // dispatch function
  // handle option selection
  const handleFilterClick: MouseEventHandler = (event) => {
    const { value } = event.currentTarget as HTMLButtonElement;
    dispatch(setFilter(value as Filter));
  };

  // TSX
  return (
    <>
      <TodoFilterOption handleClick={handleFilterClick} />
    </>
  );
};
