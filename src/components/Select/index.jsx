import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import useToggle from '../../hooks/useToggle';
import './styles.scss';

const regions = [
  { id: 'AF', name: 'Africa' },
  { id: 'AM', name: 'America' },
  { id: 'AS', name: 'Asia' },
  { id: 'EU', name: 'Europe' },
  { id: 'OC', name: 'Oceanía' },
];

const Select = () => {
  const [region, setRegion] = useState(null);
  const [shown, switchShown] = useToggle(false);

  const handleSelect = (option) => {
    setRegion(option);
    switchShown();
  };

  return (
    <div className='select'>
      <div className='select__box' onClick={switchShown}>
        {region ? regions.find(({ id }) => id === region).name : 'Filter by Region'}
        <FaChevronDown />
      </div>
      {shown && (
        <div className='select__options'>
          {regions.map((region) => (
            <div className='select__opt' key={region.id} onClick={() => handleSelect(region.id)}>
              {region.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
