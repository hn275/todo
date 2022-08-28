import { MutableRefObject, FC, useEffect, useState } from 'react';
import { ReactComponent as Sun } from 'assets/images/icon-sun.svg';
import { ReactComponent as Moon } from 'assets/images/icon-moon.svg';

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
    console.log(node.current!.dataset.theme);
  }, [darkMode]);
  return (
    <>
      <button
        onClick={handleClick}
        aria-label='dark mode toggle'
      >
        {darkMode ? <Moon /> : <Sun />}
      </button>
    </>
  );
};
