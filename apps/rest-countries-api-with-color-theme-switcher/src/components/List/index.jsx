import Card from '../Card';

import './styles.scss';

const List = ({ countries }) => {
  return (
    <div className='list'>
      {countries.map((country) => (
        <Card key={`country-${country.alpha2Code}`} {...country} />
      ))}
    </div>
  );
};

export default List;
