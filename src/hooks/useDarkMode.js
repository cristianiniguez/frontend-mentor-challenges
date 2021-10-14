import { useEffect } from 'react';
import useToggle from './useToggle';

const $root = document.querySelector(':root');

const useDarkMode = () => {
  const [dark, switchDark] = useToggle(localStorage.getItem('dark') === 'on');

  useEffect(() => {
    if (dark) {
      $root.classList.add('dark');
      localStorage.setItem('dark', 'on');
    } else {
      $root.classList.remove('dark');
      localStorage.setItem('dark', 'off');
    }
  }, [dark]);

  return { dark, switchDark };
};

export default useDarkMode;
