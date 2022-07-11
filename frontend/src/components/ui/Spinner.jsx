import spinner from '../../images/spinner.gif';

const Spinner = () => {
  return (
    <div
      style={{
        height: '60vh',
        width: '20rem',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <img
        src={spinner}
        alt='Loading...'
        style={{
          width: '50px',
          margin: 'auto',
        }}
      />
    </div>
  );
};

export default Spinner;
