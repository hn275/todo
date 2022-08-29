import { useTodoSelector } from 'hooks/hooks';
import { TodoListView } from './TodoListView';

export const TodoList = () => {
  const todoList = useTodoSelector((state) => state.todo.todoList);

  // TSX
  return (
    <>
      <TodoListView todo={todoList} />
    </>
  );
};
