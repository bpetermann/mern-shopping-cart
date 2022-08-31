import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStoredItems } from '../../features/cart/cartSlice';
import { getWishlistItems } from '../../features/wishlist/wishlistSlice';
import styles from './ProductsOverview.module.css';
import ProductsOverviewItem from './ProductsOverviewItem';
import Footer from '../layout/Footer';
import Spinner from '../../components/ui/Spinner';

const ProductsOverview = () => {
  const { filter, products, isError, isLoading, category } =
    useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoredItems(products));
    dispatch(getWishlistItems(products));
  }, [products, dispatch]);

  let selectedCategory = products.filter((item) => {
    return item.category.includes(category);
  });

  let filteredItems = selectedCategory.filter((item) => {
    return item.description.toLowerCase().includes(filter.toLowerCase());
  });

  let content = isLoading ? (
    <Spinner />
  ) : (
    <ProductsOverviewItem products={filteredItems} />
  );

  if (isError) {
    content = (
      <span className={styles['error']}>
        'Some error occured, please try again later'
      </span>
    );
  }

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
        <div className={styles['products-container']}>{content}</div>
      </div>
      <Footer />
    </>
  );
};

export default React.memo(ProductsOverview);
