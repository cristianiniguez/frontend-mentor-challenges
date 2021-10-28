import './styles.scss';

const Fatal = ({ error }) => {
  return (
    <div className='fatal'>
      <p>{error.message}</p>
    </div>
  );
};

export default Fatal;
