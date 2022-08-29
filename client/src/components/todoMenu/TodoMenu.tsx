import { TodoRemain } from 'features/todoRemain/TodoRemain';
export const TodoMenu = () => {
  return (
    <>
      <div className='todo-left'>
        <TodoRemain />
      </div>
      <div className='todo-tab'></div>
      <div className='todo-clear'></div>
    </>
  );
};
