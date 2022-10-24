import { Link } from 'react-router-dom';

import './styles.scss';
import Switcher from '../Switcher';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link className='header__link' to='/'>
          Where in the world?
        </Link>
        <Switcher />
      </div>
    </header>
  );
};

export default Header;
