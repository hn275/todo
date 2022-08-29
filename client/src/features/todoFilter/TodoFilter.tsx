import { MouseEventHandler, useEffect, useState } from 'react';
import { setFilter } from 'store/slices/filterSlice';
import { useTodoDispatch, useTodoSelector } from 'hooks/hooks';
import type { Filter } from 'store/slices/filterSlice';
import { TodoFilterOption } from './TodoFilterOption';

export const TodoFilter = () => {
  const todoFilter = useTodoSelector((state) => state.filter);
  // const [filter, setFilter] = useState<Filter>(todoFilter);
  const dispatch = useTodoDispatch();
  const handleFilterClick: MouseEventHandler = (event) => {
    // const { value } = event.currentTarget as HTMLButtonElement;
    // dispatch(setFilter(value as Filter));
  };

  // useEffect(() => {
  //   dispatch(setFilter({ filter: filter }));
  //   console.log(filter);
  // }, [filter]);

  useEffect(() => console.log(todoFilter), [todoFilter]); // NOTE: debuggo
  return (
    <>
      <TodoFilterOption handleClick={handleFilterClick} />
    </>
  );
};
