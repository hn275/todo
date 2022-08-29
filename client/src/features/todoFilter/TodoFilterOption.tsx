import React from 'react';
import { useTodoSelector } from 'hooks/hooks';
import type { Filter } from 'store/slices/filterSlice';
import './TodoFilterOption.scss';

interface TodoFilterOptionProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TodoFilterOption: React.FC<TodoFilterOptionProps> = ({
  handleClick,
}) => {
  const activeFilter: Filter = useTodoSelector((state) => state.filter.filter);
  // TSX
  return (
    <section className='todo-filter'>
      <button
        onClick={handleClick}
        value='all'
        className={activeFilter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={handleClick}
        value='active'
        className={activeFilter === 'active' ? 'active' : ''}
      >
        Active
      </button>
      <button
        onClick={handleClick}
        value='complete'
        className={activeFilter === 'complete' ? 'active' : ''}
      >
        Completed
      </button>
    </section>
  );
};
