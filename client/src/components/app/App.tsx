import React from 'react';
import './App.scss';
import { handleGetRequest } from 'store/todoThunks/getRequest';
import { useTodoDispatch } from 'hooks/hooks';
import { DarkMode } from 'features/darkMode/DarkMode';
import { TodoContainer } from 'container/todoContainer/TodoContainer';
import { TodoFilter } from 'features/todoFilter/TodoFilter';
import DarkBG from 'assets/images/bg-desktop-dark.jpg';

function App() {
  const { useEffect, useRef } = React;
  const appNode = useRef<HTMLDivElement | null>(null);
  // get all todo on mount
  const dispatch = useTodoDispatch();
  useEffect(() => {
    dispatch(handleGetRequest());
  }, []);

  return (
    <div
      className='App'
      data-theme='light'
      ref={appNode}
    >
      <div className='background'>
        {/* <img */}
        {/*   src={DarkBG} */}
        {/*   alt='background' */}
        {/* /> */}
      </div>
      <div className='wrapper'>
        <header>
          <h1>TODO</h1>
          <div className='dark-mode'>
            <DarkMode node={appNode} />
          </div>
        </header>
        <main>
          <TodoContainer />
          <TodoFilter />
        </main>
      </div>
    </div>
  );
}

export default App;
