import { useEffect, useState } from 'react';

import { getAllCountries } from '../api';

const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getAllCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { countries, loading, error };
};

export default useCountries;
