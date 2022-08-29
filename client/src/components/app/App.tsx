import React from 'react';
import './App.scss';
import { handleGetRequest } from 'store/todoThunks/getRequest';
import { useTodoSelector, useTodoDispatch } from 'hooks/hooks';
import { DarkMode } from 'features/darkMode/DarkMode';
import { TodoContainer } from 'container/todoContainer/TodoContainer';

function App() {
  const { useEffect, useRef } = React;
  const appNode = useRef<HTMLDivElement | null>(null);
  // get all todo on mount
  const dispatch = useTodoDispatch();
  useEffect(() => {
    dispatch(handleGetRequest());
  }, []);

  const todolist = useTodoSelector((state) => state.todo.todoList);
  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  return (
    <div
      className='App'
      data-theme='light'
      ref={appNode}
    >
      <header>
        <section className='banner'>
          <h1>TODO</h1>
        </section>
        <section className='dark-mode'>
          <DarkMode node={appNode} />
        </section>
      </header>
      <main>
        <TodoContainer />
      </main>
    </div>
  );
}

export default App;
