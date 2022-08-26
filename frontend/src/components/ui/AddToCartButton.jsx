import styles from './AddToCartButton.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import spinner from '../../images/spinner.gif';

const AddButton = ({ product }) => {
  const [isLoading, setisLoading] = useState(false);
  const [buttonStyle, setButtonStyle] = useState('add-btn');
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addItem(product));
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      setButtonStyle('added-btn');
      setTimeout(() => {
        setButtonStyle('add-btn');
      }, 750);
    }, 500);
  };

  return (
    <button
      className={styles[buttonStyle]}
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
