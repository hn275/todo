import React from 'react';
interface TextFieldProps {
  children: React.ReactNode;
}
export const TextField: React.FC<TextFieldProps> = ({ children }) => {
  return (
    <section className='text-field'>
      <div className='indicator'></div>
      <div className='text'>{children}</div>
    </section>
  );
};
