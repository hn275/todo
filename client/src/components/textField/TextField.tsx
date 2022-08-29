import React, { useEffect, useRef } from 'react';
import './TextField.scss';
import { ReactComponent as CheckMark } from 'assets/images/icon-check.svg';
import { ReactComponent as Cross } from 'assets/images/icon-cross.svg';

interface TextFieldProps {
  children: React.ReactNode;
  isComplete?: boolean | undefined;
  onClick: () => void;
  isInputField?: boolean | undefined;
}

export const TextField: React.FC<TextFieldProps> = ({
  children,
  isComplete,
  onClick,
  isInputField,
}) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (isComplete) {
      nodeRef.current!.classList.add('todo-is-complete');
    } else {
      nodeRef.current!.classList.remove('todo-is-complete');
    }
  }, [isComplete]);
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
          <button onClick={() => null}>
            <Cross />
          </button>
        </div>
      )}
    </div>
  );
};
