import React from 'react';
import './TextField.scss';
import { ReactComponent as CheckMark } from 'assets/images/icon-check.svg';
import { ReactComponent as Cross } from 'assets/images/icon-cross.svg';

interface TextFieldProps {
  children: React.ReactNode;
  isComplete?: boolean | undefined;
  onClick: () => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  children,
  isComplete,
  onClick,
}) => {
  return (
    <div className='text-field'>
      <div
        className='text-field-indicator'
        onClick={onClick}
      >
        {isComplete && <CheckMark />}
      </div>
      <div className='text-field-text'>{children}</div>
      <div className='text-delete'>
        <button>
          <Cross />
        </button>
      </div>
    </div>
  );
};
