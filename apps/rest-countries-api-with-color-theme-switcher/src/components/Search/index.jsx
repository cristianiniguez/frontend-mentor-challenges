import { FaSearch } from 'react-icons/fa';

import './styles.scss';

const Search = ({ value, onChange }) => {
  return (
    <div className='search'>
      <FaSearch className='search__icon' />
      <input
        className='search__input'
        type='text'
        placeholder='Search for a country ...'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
