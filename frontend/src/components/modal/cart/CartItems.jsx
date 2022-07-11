import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../../features/cart/cartSlice';
import styles from './CartItems.module.css';

const CartItems = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.map((item) => {
        return (
          <div key={item.name} className={styles.container}>
            <div>
              <h4>{item.name}</h4>
              <div className={styles.product}>
                <span>{(item.amount * item.price).toFixed(2)} $</span>
                <span>{item.amount}X</span>
              </div>
            </div>
            <div className={styles.quantityControl}>
              <button
                className={styles.button}
                onClick={() => dispatch(addItem(item))}
              >
                +
              </button>
              <button
                className={styles.button}
                onClick={() => dispatch(removeItem(item))}
              >
                –
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItems;
