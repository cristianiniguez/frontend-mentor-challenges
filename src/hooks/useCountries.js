import { useEffect, useState } from 'react';

import { getAllCountries } from '../api';

const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries().then((data) => setCountries(data));
  }, []);

  return countries;
};

export default useCountries;
