import { useEffect, useState } from 'react';

import { getCountryByCode } from '../api';

const useCountry = (code) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    getCountryByCode(code).then((data) => setCountry(data));
  }, [code]);

  return country;
};

export default useCountry;
