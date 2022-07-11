import styles from './Searchbar.module.css';
import { useDispatch } from 'react-redux';
import { filter } from '../../features/products/productSlice';

const Searchbar = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles['searchbar']}>
      <button className={styles['toggle-button']}>
        <span className={styles['toggle-button-bar']}></span>
        <span className={styles['toggle-button-bar']}></span>
        <span className={styles['toggle-button-bar']}></span>
      </button>
      <input
        onChange={(e) => {
          dispatch(filter(e.target.value));
        }}
        className={styles['search-input']}
        type='text'
        placeholder='Search'
      />
    </div>
  );
};

export default Searchbar;
