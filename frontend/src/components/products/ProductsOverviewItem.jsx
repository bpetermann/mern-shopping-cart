import styles from './ProductsOverviewItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  removeFromWishlist,
  addToWishlist,
} from '../../features/wishlist/wishlistSlice';
import StyledIcon from '../ui/StyledIcon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddToCartButton from '../ui/AddToCartButton';

const ProductsOverviewItem = ({ products }) => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <>
      {products.map((item) => {
        return (
          <div className={styles['product-item-container']} key={item._id}>
            <NavLink to={`/products/${item._id}`}>
              <img
                src={require('../../images/products/' + item.name + '.png')}
                alt={item.name}
                className={styles['product-image']}
              />
            </NavLink>
            {wishlistItems.includes(item) ? (
              <StyledIcon onClick={() => dispatch(removeFromWishlist(item))}>
                <FavoriteIcon className={styles['wishlist-heart-button']} />
              </StyledIcon>
            ) : (
              <StyledIcon onClick={() => dispatch(addToWishlist(item))}>
                <FavoriteIcon />
              </StyledIcon>
            )}
            <div>{item.description}</div>
            <div className={styles['item-price']}>{item.price} $</div>
            <AddToCartButton product={item} btnStyle={'overview'} />
          </div>
        );
      })}
    </>
  );
};

export default ProductsOverviewItem;
