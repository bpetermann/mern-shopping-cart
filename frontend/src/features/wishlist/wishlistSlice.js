import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistItems: [],
  showWishlist: false,
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    reset: (state) => {
      state.cartItems = [];
      state.showShoppingCart = false;
    },
    getWishlistItems: (state, action) => {
      const items = action.payload;
      if (localStorage.length !== 0) {
        const initialWishlistItems = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const value = localStorage.getItem(key);
          const index = items.findIndex((item) => item._id === value);
          if (index !== -1) {
            const storedItem = items[index];
            initialWishlistItems.push(storedItem);
          }
        }
        state.wishlistItems = [...initialWishlistItems];
      }
    },
    wishlistToggle: (state) => {
      state.showWishlist = !state.showWishlist;
    },
    addToWishlist: (state, action) => {
      const shopItem = action.payload;
      state.wishlistItems.push(shopItem);
      localStorage.setItem(`wishlistItem${shopItem._id}`, shopItem._id);
    },
    removeFromWishlist: (state, action) => {
      const shopItem = action.payload;

      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.name !== shopItem.name
      );

      localStorage.removeItem(`wishlistItem${shopItem._id}`);
    },
  },
});

export const {
  wishlistToggle,
  getWishlistItems,
  addToWishlist,
  removeFromWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
