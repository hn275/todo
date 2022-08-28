import React from 'react';
import './TextField.scss';
import { ReactComponent as CheckMark } from 'assets/images/icon-check.svg';

interface TextFieldProps {
  children: React.ReactNode;
  checked?: boolean | undefined;
}

export const TextField: React.FC<TextFieldProps> = ({ children, checked }) => {
  console.log(checked);
  return (
    <section className='text-field'>
      <div className='indicator'>{checked && <CheckMark />}</div>
      <div className='text'>{children}</div>
    </section>
  );
};
