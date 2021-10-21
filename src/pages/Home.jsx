import { useMemo, useState } from 'react';

import Search from '../components/Search';
import Select from '../components/Select';
import List from '../components/List';

import useCountries from '../hooks/useCountries';

const Home = () => {
  const countries = useCountries();
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState(null);

  const filteredCountries = useMemo(() => {
    let filtered = countries;

    if (search) {
      filtered = filtered.filter(({ name }) => name.match(new RegExp(search, 'i')));
    }

    if (region) {
      filtered = filtered.filter((country) => country.region === region);
    }

    return filtered;
  }, [countries, region, search]);

  return (
    <section>
      <div className='container'>
        <Search value={search} onChange={setSearch} />
        <Select value={region} onChange={setRegion} />
        <List countries={filteredCountries}>Country</List>
      </div>
    </section>
  );
};

export default Home;
