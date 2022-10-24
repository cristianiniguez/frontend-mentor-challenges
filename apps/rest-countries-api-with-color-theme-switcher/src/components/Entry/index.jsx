import './styles.scss';

const Entry = ({ name, value }) => {
  return (
    <p className='entry'>
      <span className='entry__name'>{name}:</span>
      {` `}
      <span className='entry__value'>{value}</span>
    </p>
  );
};

export default Entry;
