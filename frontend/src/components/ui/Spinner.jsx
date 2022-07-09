import spinner from '../../images/spinner.gif';

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{
        width: '50px',
        margin: 'auto',
        display: 'block',
      }}
    />
  );
};

export default Spinner;
