import Search from '../components/Search';
import Select from '../components/Select';

const Home = () => {
  return (
    <section>
      <div className='container'>
        <Search />
        <Select />
        <div>Country</div>
      </div>
    </section>
  );
};

export default Home;
