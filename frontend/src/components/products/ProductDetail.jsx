import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct, reset } from '../../features/products/productSlice';
import { addItem } from '../../features/cart/cartSlice';
import { toast } from 'react-toastify';
import styles from './ProductDetail.module.css';
import Accordion from '../ui/Accordion';
import Footer from '../layout/Footer';
import { RiTruckLine } from 'react-icons/ri';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { GoPackage } from 'react-icons/go';
import Spinner from '../ui/Spinner';

const ProductDetail = () => {
  const { isLoading, product, isError, message } = useSelector(
    (state) => state.product
  );
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(params.productId));

    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [dispatch, isError, message, params.productId]);

  if (isLoading || !product.name) {
    return <Spinner />;
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
          <div className={styles['product-rating']}></div>
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
