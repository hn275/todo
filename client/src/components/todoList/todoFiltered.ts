import type { TodoItem } from 'store/slices/todoSlice';
import type { Filter } from 'store/slices/filterSlice';

export const todoFiltered = (_filter: Filter, _todoList: TodoItem[]) => {
  /**
   * @params {Filter} _filter: read only, currently applied filter
   * @params {TodoItem[]} todoItem: read only, all todo item
   * return {TodoItem[]}: new applied todo list
   */
  if (_filter === 'complete') {
    return _todoList.filter((todoItem: TodoItem) => {
      return todoItem.isComplete === true;
    });
  } else if (_filter === 'active') {
    return _todoList.filter((todoItem: TodoItem) => {
      return todoItem.isComplete === false;
    });
  } else if (_filter === 'all') {
    return _todoList;
  }
};
