import styles from './Categories.module.css';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../features/products/productSlice';

const Categories = () => {
  const { category } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const location = useLocation();

  if (location.pathname.includes('auth')) {
    return <div className={styles.container}></div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles['link-position']}>
        <NavLink to='/'>
          <button
            className={
              styles[
                category === 'Shoes' ? 'category-link-active' : 'category-link'
              ]
            }
            onClick={() => dispatch(selectCategory('Shoes'))}
          >
            Shoes
          </button>
        </NavLink>
        <NavLink to='/'>
          <button
            className={
              styles[
                category === 'Bags' ? 'category-link-active' : 'category-link'
              ]
            }
            onClick={() => dispatch(selectCategory('Bags'))}
          >
            Bags
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Categories;
