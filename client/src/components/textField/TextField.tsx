import React, { useEffect, useRef } from 'react';
import { deleteRequest } from 'store/todoThunks/deleteRequest';
import { useTodoDispatch } from 'hooks/hooks';
import { ReactComponent as CheckMark } from 'assets/images/icon-check.svg';
import { ReactComponent as Cross } from 'assets/images/icon-cross.svg';
import './TextField.scss';

interface TextFieldProps {
  children: React.ReactNode;
  isComplete?: boolean | undefined;
  onClick: () => void;
  isInputField?: boolean | undefined;
  id?: string; // for delete request
}

export const TextField: React.FC<TextFieldProps> = ({
  children,
  isComplete,
  onClick,
  isInputField,
  id,
}) => {
  // Toggling complete
  const nodeRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (isComplete) {
      nodeRef.current!.classList.add('todo-is-complete');
    } else {
      nodeRef.current!.classList.remove('todo-is-complete');
    }
  }, [isComplete]);

  // Handle delete request
  const dispatch = useTodoDispatch();
  const handleDelete = () => {
    dispatch(deleteRequest([id!]));
  };

  // TSX
  return (
    <div
      className='text-field'
      ref={nodeRef}
    >
      <div
        className='text-field-indicator'
        onClick={onClick}
      >
        {isComplete && <CheckMark />}
      </div>
      <div className='text-field-text'>{children}</div>
      {!isInputField && (
        <div className='text-delete'>
          <button onClick={handleDelete}>
            <Cross />
          </button>
        </div>
      )}
    </div>
  );
};
