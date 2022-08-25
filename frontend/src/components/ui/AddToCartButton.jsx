import styles from './AddToCartButton.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

const AddButton = ({ product }) => {
  const [buttonStyle, setButtonStyle] = useState('add-btn');
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addItem(product));
    setButtonStyle('added-btn');
    setTimeout(() => {
      setButtonStyle('add-btn');
    }, 1000);
  };

  return (
    <button
      className={styles[buttonStyle]}
      onClick={() => {
        addToCartHandler(product);
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddButton;
