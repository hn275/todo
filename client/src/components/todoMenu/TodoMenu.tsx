import { TodoRemain } from 'features/todoRemain/TodoRemain';
import { ClearComplete } from 'features/clearComplete/ClearComplete';
import './TodoMenu.scss';

export const TodoMenu = () => {
  return (
    <>
      <section className='todo-menu box-container'>
        <TodoRemain />
        <ClearComplete />
      </section>
    </>
  );
};
