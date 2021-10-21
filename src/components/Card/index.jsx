import numeral from 'numeral';

import './styles.scss';

const Card = ({ name, flags, population, region, capital }) => {
  return (
    <div className='card'>
      <img className='card__img' src={flags.svg} alt={`Bandera de ${name}`} />
      <div className='card__info'>
        <h2>{name}</h2>
        <p>
          <span className='card__label'>Population:</span>
          {` `}
          {numeral(population).format('0,0')}
        </p>
        <p>
          <span className='card__label'>Region:</span>
          {` `}
          {region}
        </p>
        <p>
          <span className='card__label'>Capital:</span>
          {` `}
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
