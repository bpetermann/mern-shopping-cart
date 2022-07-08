import styles from './ProductsOverview.module.css';
import Footer from '../layout/Footer';
import ProductsOverviewItem from './ProductsOverviewItem';

const ProductsOverview = ({ products }) => {
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
          {<ProductsOverviewItem products={products} />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsOverview;
