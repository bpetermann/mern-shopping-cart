import styles from './ProductsOverviewItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromWishlist,
  addToWishlist,
} from '../../features/wishlist/wishlistSlice';
import StyledIcon from '../ui/StyledIcon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddToCartBtn from '../ui/AddToCartBtn';
import ProductsOverviewItemImage from './ProductsOverviewItemImage';

const ProductsOverviewItem = ({ products }) => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <>
      {products.map((item) => {
        return (
          <div className={styles['product-item-container']} key={item._id}>
            <ProductsOverviewItemImage
              name={item.name}
              id={item._id}
              hasAltImages={item.hasAltImages}
            />
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
            <AddToCartBtn product={item} btnStyle={'add-btn'} />
          </div>
        );
      })}
    </>
  );
};

export default ProductsOverviewItem;
