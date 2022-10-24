import { useMemo, useState } from 'react';

import Controls from '../components/Controls';
import Spinner from '../components/Spinner';
import List from '../components/List';

import useCountries from '../hooks/useCountries';
import Fatal from '../components/Fatal';

const Home = () => {
  const { countries, loading, error } = useCountries();
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState(null);

  const filteredCountries = useMemo(() => {
    return countries
      .filter((country) => (search ? country.name.match(new RegExp(search, 'i')) : true))
      .filter((country) => (region ? country.region === region : true));
  }, [countries, region, search]);

  return (
    <section>
      <div className='container'>
        <Controls {...{ search, region }} onChangeSearch={setSearch} onChangeRegion={setRegion} />
        {error ? (
          <Fatal error={error} />
        ) : loading ? (
          <Spinner />
        ) : (
          <List countries={filteredCountries}>Country</List>
        )}
      </div>
    </section>
  );
};

export default Home;
