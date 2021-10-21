import Border from '../Border';
import Entry from '../Entry';

import './styles.scss';

const Info = ({
  name,
  flags,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => {
  return (
    <div className='info'>
      <img src={flags.svg} alt={`Bandera de ${name}`} />
      <h1>{name}</h1>
      <div className='info__part'>
        <Entry name='Native Name' value={nativeName} />
        <Entry name='Population' value={population} />
        <Entry name='Region' value={region} />
        <Entry name='Sub Region' value={subregion} />
        <Entry name='Capital' value={capital} />
      </div>
      <div className='info__part'>
        <Entry name='Top Level Domain' value={topLevelDomain} />
        <Entry name='Currencies' value={currencies.map(({ name }) => name).join(', ')} />
        <Entry name='Languages' value={languages.map(({ name }) => name).join(', ')} />
      </div>
      <div className='info__borders'>
        <h3>Border Countries</h3>
        <div className='info__borders-container'>
          {borders.slice(0, 3).map((code) => (
            <Border code={code.toLowerCase()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
