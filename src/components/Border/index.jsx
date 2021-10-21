import { Link } from 'react-router-dom';
import useCountry from '../../hooks/useCountry';

import './styles.scss';

const Border = ({ code }) => {
  const country = useCountry(code);

  return country ? (
    <Link to={`/detail/${code}`} className='border'>
      {country.name}
    </Link>
  ) : (
    <div className='border'>...</div>
  );
};

export default Border;
