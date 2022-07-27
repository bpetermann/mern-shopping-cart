import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AverageRating, YourRating } from '../ui/Rating';
import { addItem } from '../../features/cart/cartSlice';
import { reset } from '../../features/products/productSlice';
import {
  getRatings,
  rateProduct,
  resetRating,
} from '../../features/ratings/ratingSlice';
import styles from './ProductDetail.module.css';
import Spinner from '../../components/ui/Spinner';
import Accordion from '../ui/Accordion';
import Footer from '../layout/Footer';
import { RiTruckLine } from 'react-icons/ri';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { GoPackage } from 'react-icons/go';

const ProductDetail = () => {
  const { product, isLoading, isError } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);
  const { ratings } = useSelector((state) => state.ratings);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const productRatingHandler = async (rating) => {
    const ratingData = {
      email: user.email,
      productId: params.productId,
      rating,
    };
    dispatch(rateProduct(ratingData));
  };

  useEffect(() => {
    dispatch(getRatings(params.productId));

    return () => {
      dispatch(resetRating());
    };

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isError) {
      navigate('/not-found');
      dispatch(reset());
    }
  }, [isError, navigate, dispatch]);

  if (isLoading || !product.name) {
    return (
      <div className={styles['spinner-container']}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['image-container']}>
          <img
            src={require('../../images/' + product.name + '.png')}
            alt={product.name}
            className={styles['product-image']}
          />
        </div>
        <div className={styles['product-container']}>
          <h2 className={styles['product-name']}>{product.name}</h2>
          <p className={styles['product-description']}>{product.description}</p>
          <p>€{product.price}</p>
          <div className={styles['product-rating']}>
            <AverageRating
              average={ratings.average}
              ratings={ratings.userRatings}
            />
            {user && <YourRating productRating={productRatingHandler} />}
          </div>
          <form className={styles['product-order-form']}>
            <select>
              <option value='one'>One Size</option>
            </select>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(addItem(product));
              }}
            >
              Add to Cart
            </button>
          </form>
          <table className={styles['product-table']}>
            <tbody>
              <tr>
                <td>
                  <RiTruckLine
                    size={22}
                    className={styles['product-table-icons']}
                  />
                  Standard Delivery <br />
                  <p>2-4 business days</p>
                </td>
              </tr>
              <tr>
                <td>
                  <GoPackage
                    size={22}
                    className={styles['product-table-icons']}
                  />
                  30 days return policy
                </td>
              </tr>
              <tr>
                <td>
                  <BsArrowReturnLeft
                    size={22}
                    className={styles['product-table-icons']}
                  />
                  Free Shipping &amp; Returns
                </td>
              </tr>
            </tbody>
          </table>
          <Accordion
            headline={['Materials & Care', 'Quality', 'Delivery & Returns']}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
