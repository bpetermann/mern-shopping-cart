import classes from './Cart.module.css';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop';
import CartItems from './CartItems';
import { useSelector, useDispatch } from 'react-redux';
import { cartToggle } from '../../../features/cart/cartSlice';

const CartOverlay = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(function (acc, item) {
    return acc + item.amount * item.price;
  }, 0);

  return (
    <div className={classes.container}>
      <CartItems />
      {totalPrice > 0 && (
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalPrice.toFixed(2)} $</span>
        </div>
      )}
      {totalPrice > 0 ? (
        <button className={classes.orderButton}>Order</button>
      ) : (
        <button
          onClick={() => dispatch(cartToggle())}
          className={classes.orderButton}
        >
          No items (yet!)
        </button>
      )}
    </div>
  );
};

const Cart = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop toggle={'cart'} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <CartOverlay />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Cart;
