import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { cartToggle } from '../../features/cart/cartSlice';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function CartBadge() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const totalCartItems = cartItems.reduce(function (acc, item) {
    return acc + item.amount;
  }, 0);

  return (
    <IconButton aria-label='cart' onClick={() => dispatch(cartToggle())}>
      <StyledBadge badgeContent={totalCartItems} color='warning'>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

export { CartBadge };
