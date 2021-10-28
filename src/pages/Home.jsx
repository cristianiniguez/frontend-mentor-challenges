import { useMemo, useState } from 'react';

import Controls from '../components/Controls';
import List from '../components/List';

import useCountries from '../hooks/useCountries';

const Home = () => {
  const countries = useCountries();
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
        <List countries={filteredCountries}>Country</List>
      </div>
    </section>
  );
};

export default Home;
