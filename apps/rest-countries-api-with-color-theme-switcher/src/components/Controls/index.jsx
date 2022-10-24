import Search from '../Search';
import Select from '../Select';

import './styles.scss';

const Controls = ({ search, region, onChangeSearch, onChangeRegion }) => {
  return (
    <div className='controls'>
      <Search value={search} onChange={onChangeSearch} />
      <Select value={region} onChange={onChangeRegion} />
    </div>
  );
};

export default Controls;
