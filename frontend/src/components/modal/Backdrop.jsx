import styles from './Backdrop.module.css';
import { useDispatch } from 'react-redux';
import { cartToggle } from '../../features/cart/cartSlice';

const Backdrop = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.backdrop}
      onClick={() => dispatch(cartToggle())}
    ></div>
  );
};

export default Backdrop;
