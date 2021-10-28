import Back from '../components/Back';
import Fatal from '../components/Fatal';
import Spinner from '../components/Spinner';
import Info from '../components/Info';

import useCountry from '../hooks/useCountry';

const Detail = (props) => {
  const { country, loading, error } = useCountry(props.match.params.code);

  return (
    <section>
      <div className='container'>
        <Back />
        {error ? <Fatal error={error} /> : loading ? <Spinner /> : country && <Info {...country} />}
      </div>
    </section>
  );
};

export default Detail;
