import { Link } from 'react-router-dom';
import { FaMoon, FaRegMoon } from 'react-icons/fa';

import useDarkMode from '../../hooks/useDarkMode';
import './styles.scss';

const Header = () => {
  const { dark, switchDark } = useDarkMode();

  return (
    <header className='header'>
      <div className='header__container'>
        <Link className='header__link' to='/'>
          Where in the world?
        </Link>
        <button className='header__theme-switcher' onClick={switchDark}>
          {dark ? <FaMoon /> : <FaRegMoon />}
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;