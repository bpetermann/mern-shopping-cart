import styles from './ProductsOverviewItem.module.css';
import { NavLink } from 'react-router-dom';
import StyledIcon from '../ui/StyledIcon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

const ProductsOverviewItem = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <>
      {products.map((item) => {
        return (
          <div className={styles['product-item-container']} key={item._id}>
            <NavLink to={`/product/${item._id}`}>
              <img
                src={require('../../images/' + item.name + '.png')}
                alt={item.name}
                className={styles['product-image']}
              />
            </NavLink>
            <StyledIcon>
              <FavoriteIcon />
            </StyledIcon>
            <div>{item.description}</div>
            <div className={styles['item-price']}>{item.price} $</div>
            <button
              className={styles['button']}
              onClick={() => {
                dispatch(addItem(item));
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ProductsOverviewItem;
