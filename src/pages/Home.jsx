import Search from '../components/Search';
import Select from '../components/Select';
import List from '../components/List';

import useCountries from '../hooks/useCountries';

const Home = () => {
  const countries = useCountries();

  console.log(countries);

  return (
    <section>
      <div className='container'>
        <Search />
        <Select />
        <List countries={countries}>Country</List>
      </div>
    </section>
  );
};

export default Home;
