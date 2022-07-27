import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import productReducer from '../features/products/productSlice';
import ratingReducer from '../features/ratings/ratingSlice';
import cartReducer from '../features/cart/cartSlice';
import wishlistSliceReducer from '../features/wishlist/wishlistSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    ratings: ratingReducer,
    wishlist: wishlistSliceReducer,
  },
});
