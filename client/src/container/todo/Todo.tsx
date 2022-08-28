import { AddNewTodo } from 'features/addNewTodo/AddNewTodo';

export const Todo = () => {
  return (
    <section id='todo-app'>
      <div className='new-todo'>
        <AddNewTodo />
      </div>
    </section>
  );
};
