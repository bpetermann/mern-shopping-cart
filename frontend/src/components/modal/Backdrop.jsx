import styles from './Backdrop.module.css';
import { useDispatch } from 'react-redux';
import { cartToggle } from '../../features/cart/cartSlice';
import { wishlistToggle } from '../../features/wishlist/wishlistSlice';

const Backdrop = ({ toggle }) => {
  const dispatch = useDispatch();

  const toggleHandler = toggle === 'cart' ? cartToggle : wishlistToggle;

  return (
    <div
      className={styles.backdrop}
      onClick={() => dispatch(toggleHandler())}
    ></div>
  );
};

export default Backdrop;
