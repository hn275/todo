import { MutableRefObject, FC, useEffect, useState } from 'react';
import { ReactComponent as Sun } from 'assets/images/icon-sun.svg';
import { ReactComponent as Moon } from 'assets/images/icon-moon.svg';
import './DarkMode.scss';

interface DarkModeProps {
  node: MutableRefObject<HTMLDivElement | null>;
}
export const DarkMode: FC<DarkModeProps> = ({ node }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const handleClick = () => {
    setDarkMode((state) => !state);
  };
  // Change mode
  useEffect(() => {
    if (darkMode) {
      node.current!.dataset.theme = 'dark';
    } else {
      node.current!.dataset.theme = 'light';
    }
  }, [darkMode, node]);
  return (
    <>
      <button
        className='dark-mode'
        onClick={handleClick}
        aria-label='dark mode toggle'
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </>
  );
};
