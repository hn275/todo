import { useTodoDispatch, useTodoSelector } from 'hooks/hooks';
import { deleteRequest } from 'store/todoThunks/deleteRequest';
import type { TodoItem } from 'store/slices/todoSlice';

export const ClearComplete = () => {
  const todoList = useTodoSelector((state) => state.todo.todoList);
  const dispatch = useTodoDispatch();

  const handleClear = () => {
    const completedTodoIds: string[] = [];
    // Get all completed todo id
    todoList.forEach((todo: TodoItem) => {
      if (todo.isComplete === true) {
        completedTodoIds.push(todo.id);
      }
    });
    // Delete request
    dispatch(deleteRequest(completedTodoIds));
  };
  return <button onClick={handleClear}>Clear Complete</button>;
};
