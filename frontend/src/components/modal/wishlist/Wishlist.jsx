import styles from './Wishlist.module.css';
import Backdrop from '../Backdrop';
import WishlistItems from './WishlistItems';
import { useDispatch } from 'react-redux';
import { wishlistToggle } from '../../../features/wishlist/wishlistSlice';

const Wishlist = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Backdrop toggle={'wishlist'} />
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
    </>
  );
};

export default Wishlist;
