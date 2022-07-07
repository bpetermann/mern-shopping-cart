import styles from './Searchbar.module.css';

const Searchbar = () => {
  return (
    <div className={styles['searchbar']}>
      <button className={styles['toggle-button']}>
        <span className={styles['toggle-button-bar']}></span>
        <span className={styles['toggle-button-bar']}></span>
        <span className={styles['toggle-button-bar']}></span>
      </button>
      <input
        className={styles['search-input']}
        type='text'
        placeholder='Search'
      />
    </div>
  );
};

export default Searchbar;
