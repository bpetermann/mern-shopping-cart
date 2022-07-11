import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStoredItems } from '../../features/cart/cartSlice';
import styles from './ProductsOverview.module.css';
import ProductsOverviewItem from './ProductsOverviewItem';
import Footer from '../layout/Footer';
import Spinner from '../ui/Spinner';

const ProductsOverview = () => {
  const { isLoading, filter, products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoredItems(products));
  }, [products, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  let filteredItems = products.filter((item) => {
    return item.description.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles['intro-container']}>
          <div className={styles.advertise}>
            <h2>DROP 02 SUMMER 2022</h2>
            <p>The 3 Pairs of Shoes You Need for this Summer</p>
          </div>
          <img
            src={require('../../images/model.png')}
            alt='Sneaker Model'
            className={styles['model-image']}
          />
        </div>
        <div className={styles['products-container']}>
          {<ProductsOverviewItem products={filteredItems} />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsOverview;
