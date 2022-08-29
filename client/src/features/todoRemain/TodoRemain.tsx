import { useTodoSelector } from 'hooks/hooks';

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
  return <>{getTodoRemain()}</>;
};
