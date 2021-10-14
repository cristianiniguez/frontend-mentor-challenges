import { FaSearch } from 'react-icons/fa';

import './styles.scss';

const Search = () => {
  return (
    <div className='search'>
      <FaSearch className='search__icon' />
      <input className='search__input' type='text' placeholder='Search for a country ...' />
    </div>
  );
};

export default Search;
