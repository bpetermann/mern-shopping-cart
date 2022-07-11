import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { cartToggle } from '../../features/cart/cartSlice';
import { wishlistToggle } from '../../features/wishlist/wishlistSlice';

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

function WishlistBadge() {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const totalWishlistItems = wishlistItems.length;

  return (
    <IconButton aria-label='cart' onClick={() => dispatch(wishlistToggle())}>
      <StyledBadge badgeContent={totalWishlistItems} color='warning'>
        <FavoriteIcon />
      </StyledBadge>
    </IconButton>
  );
}

export { CartBadge, WishlistBadge };
