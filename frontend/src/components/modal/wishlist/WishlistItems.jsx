import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../../features/cart/cartSlice';
import { removeFromWishlist } from '../../../features/wishlist/wishlistSlice';

import styles from './WishlistItems.module.css';

const WishlistItems = () => {
  const dispatch = useDispatch();

  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <>
      {wishlistItems.map((item) => {
        return (
          <div className={styles.container} key={item._id}>
            <img
              src={require('../../../images/' + item.name + '.png')}
              alt={item.name}
              className={styles.image}
              width={160}
              height={224}
            />
            <button
              className={styles.wishlistBtn}
              onClick={() => dispatch(removeFromWishlist(item))}
            >
              <div className={styles['wishlist-heart-button']}>
                <img
                  src={require('../../../images/heart-full.png')}
                  alt={'Add Item to your Wishlist'}
                  width={24}
                  height={24}
                />
              </div>
            </button>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.price}>{item.price} $</div>
            <button
              className={styles.button}
              onClick={() => dispatch(addItem(item))}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </>
  );
};

export default WishlistItems;
