import styles from './ProductsOverviewItem.module.css';
import { NavLink } from 'react-router-dom';
import StyledIcon from '../ui/StyledIcon';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductsOverviewItem = ({ products }) => {
  return (
    <>
      {products.map((item) => {
        return (
          <div className={styles['product-item-container']} key={item.id}>
            <NavLink to='/'>
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
            <button className={styles['button']}>Add to Cart</button>
          </div>
        );
      })}
    </>
  );
};

export default ProductsOverviewItem;
