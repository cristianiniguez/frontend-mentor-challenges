import { Link } from 'react-router-dom';
import useCountry from '../../hooks/useCountry';

import './styles.scss';

const Border = ({ code }) => {
  const { country, loading, error } = useCountry(code);

  return error ? (
    <div className='border'>❌</div>
  ) : loading || !country ? (
    <div className='border'>...</div>
  ) : (
    <Link to={`/detail/${code}`} className='border'>
      {country.name}
    </Link>
  );
};

export default Border;
