import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import useToggle from '../../hooks/useToggle';
import './styles.scss';

const regions = [
  { id: 'AF', name: 'Africa' },
  { id: 'AM', name: 'Americas' },
  { id: 'AS', name: 'Asia' },
  { id: 'EU', name: 'Europe' },
  { id: 'OC', name: 'Oceania' },
];

const Select = ({ value, onChange }) => {
  const [region, setRegion] = useState(value);
  const [shown, switchShown] = useToggle(false);

  const handleSelect = (option) => {
    setRegion(option);
    switchShown();
  };

  useEffect(() => {
    onChange(region);
  }, [onChange, region]);

  return (
    <div className='select'>
      <div className='select__box' onClick={switchShown}>
        {region ? regions.find(({ name }) => name === region).name : 'Filter by Region'}
        <FaChevronDown />
      </div>
      {shown && (
        <div className='select__options'>
          {regions.map((region) => (
            <div className='select__opt' key={region.id} onClick={() => handleSelect(region.name)}>
              {region.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
