import { FaMoon, FaRegMoon } from 'react-icons/fa';

import useDarkMode from '../../hooks/useDarkMode';
import './styles.scss';

const Switcher = () => {
  const { dark, switchDark } = useDarkMode();

  return (
    <button className='switcher' onClick={switchDark}>
      {dark ? <FaMoon /> : <FaRegMoon />}
      <span>Dark Mode</span>
    </button>
  );
};

export default Switcher;
