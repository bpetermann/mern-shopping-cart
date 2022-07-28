import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AverageRating, YourRating } from '../ui/Rating';
import { addItem } from '../../features/cart/cartSlice';
import { reset } from '../../features/products/productSlice';
import { toast } from 'react-toastify';
import styles from './ProductDetail.module.css';
import Spinner from '../../components/ui/Spinner';
import Accordion from '../ui/Accordion';
import Footer from '../layout/Footer';
import { RiTruckLine } from 'react-icons/ri';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { GoPackage } from 'react-icons/go';

async function addProductRating(value, id, email) {
  const response = await fetch(`/api/products/rate/${id}`, {
    method: 'POST',
    body: JSON.stringify({ rating: value, email: email }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

const ProductDetail = () => {
  const [rating, setRating] = useState(null);
  const { product, isLoading, isError } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const productRatingHandler = async (value) => {
    try {
      const result = await addProductRating(
        value,
        params.productId,
        user.email
      );
      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetch(`/api/products/rate/${params.productId}`)
      .then((response) => response.json())
      .then((data) => {
        setRating(data);
      });
    // eslint-disable-next-line
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
            {rating && (
              <AverageRating
                average={rating.average}
                ratings={rating.userRatings}
              />
            )}
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
