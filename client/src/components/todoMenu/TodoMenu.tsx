import { TodoRemain } from 'features/todoRemain/TodoRemain';
import { TodoFilter } from 'features/todoFilter/TodoFilter';

export const TodoMenu = () => {
  return (
    <>
      <div className='todo-left'>
        <TodoRemain />
      </div>
      <div className='todo-filter'>
        <TodoFilter />
      </div>
      <div className='todo-clear'></div>
    </>
  );
};
