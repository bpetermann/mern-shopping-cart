import styles from './AddToCartBtn.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import spinner from '../../images/spinner.gif';

const AddButton = ({ product, btnStyle }) => {
  const [isLoading, setisLoading] = useState(false);
  const [productWasAdded, setProductWasAdded] = useState(false);
  const dispatch = useDispatch();

  const buttonClasses = `${styles[btnStyle]} ${
    productWasAdded && styles['added']
  }`;

  const addToCartHandler = (product) => {
    dispatch(addItem(product));
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      setProductWasAdded(true);
      setTimeout(() => {
        setProductWasAdded(false);
      }, 1000);
    }, 500);
  };

  return (
    <button
      className={buttonClasses}
      onClick={() => {
        addToCartHandler(product);
      }}
    >
      {isLoading ? (
        <img src={spinner} alt='Add to Cart' className={styles['loading']} />
      ) : (
        <>Add to Cart</>
      )}
    </button>
  );
};

export default AddButton;
