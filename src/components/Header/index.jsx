import { Link } from 'react-router-dom';

import useDarkMode from '../../hooks/useDarkMode';
import './styles.scss';

const Header = () => {
  const { switchDark } = useDarkMode();

  return (
    <header className='header'>
      <div className='header__container'>
        <Link className='header__link' to='/'>
          Where in the world?
        </Link>
        <button className='header__theme-switcher' onClick={switchDark}>
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
