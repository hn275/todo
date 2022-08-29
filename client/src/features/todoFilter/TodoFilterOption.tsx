import React from 'react';

interface TodoFilterOptionProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TodoFilterOption: React.FC<TodoFilterOptionProps> = ({
  handleClick,
}) => {
  return (
    <>
      <button
        onClick={handleClick}
        value='all'
      >
        All
      </button>
      <button
        onClick={handleClick}
        value='active'
      >
        Active
      </button>
      <button
        onClick={handleClick}
        value='complete'
      >
        Completed
      </button>
    </>
  );
};
