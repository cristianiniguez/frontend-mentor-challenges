import { useEffect, useState } from 'react';

import { getCountryByCode } from '../api';

const useCountry = (code) => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getCountryByCode(code)
      .then((data) => setCountry(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [code]);

  return { country, loading, error };
};

export default useCountry;
