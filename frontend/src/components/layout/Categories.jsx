import styles from './Categories.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../features/products/productSlice';

const Categories = () => {
  const { category } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles['link-position']}>
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
      </div>
    </div>
  );
};

export default Categories;
