import Back from '../components/Back';
import Info from '../components/Info';
import useCountry from '../hooks/useCountry';

const Detail = (props) => {
  const { country } = useCountry(props.match.params.code);

  return (
    <section>
      <div className='container'>
        <Back />
        {country && <Info {...country} />}
      </div>
    </section>
  );
};

export default Detail;
