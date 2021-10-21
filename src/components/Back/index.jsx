import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import './styles.scss';

const Back = () => {
  return (
    <Link to='/' className='back'>
      <FaArrowLeft />
      Back
    </Link>
  );
};

export default Back;
