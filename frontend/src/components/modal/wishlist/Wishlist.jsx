import styles from './Wishlist.module.css';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop';
import WishlistItems from './WishlistItems';
import { useDispatch } from 'react-redux';
import { wishlistToggle } from '../../../features/wishlist/wishlistSlice';

const WishlistOverlay = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <button
          onClick={() => dispatch(wishlistToggle())}
          className={styles.closeWishlistBtn}
        >
          X
        </button>
      </div>
      <WishlistItems />
    </div>
  );
};

const Wishlist = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop toggle={'wishlist'} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <WishlistOverlay />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Wishlist;
