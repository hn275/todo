import { useTodoSelector } from 'hooks/hooks';
import './TodoRemain.scss';

export const TodoRemain = () => {
  // get all todo list
  const todoList = useTodoSelector((state) => state.todo.todoList);

  // get all not completed todo
  const todoActive = todoList.filter((todo) => {
    return todo.isComplete === false;
  });
  const todoRemain = todoActive.length; // item remaining

  // english lol
  const getTodoRemain = () => {
    if (todoRemain > 1) {
      return `${todoRemain} items left`;
    } else {
      return `${todoRemain} item left`;
    }
  };

  // TSX
  return <section className='todo-remain'>{getTodoRemain()}</section>;
};
