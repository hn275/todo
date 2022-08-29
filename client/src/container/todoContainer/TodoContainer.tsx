import { AddNewTodo } from 'features/addNewTodo/AddNewTodo';
import { TodoList } from 'components/todoList/TodoList';

export const TodoContainer = () => {
  return (
    <section id='todo-app'>
      <div className='todo-new'>
        <AddNewTodo />
      </div>
      <div className='todo-list'>
        <TodoList />
      </div>
    </section>
  );
};
