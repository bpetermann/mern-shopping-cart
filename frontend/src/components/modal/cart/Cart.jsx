import classes from './Cart.module.css';
import Backdrop from '../Backdrop';
import CartItems from './CartItems';
import { useSelector, useDispatch } from 'react-redux';
import { cartToggle } from '../../../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(function (acc, item) {
    return acc + item.amount * item.price;
  }, 0);

  return (
    <>
      <Backdrop toggle={'cart'} />
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
    </>
  );
};

export default Cart;
