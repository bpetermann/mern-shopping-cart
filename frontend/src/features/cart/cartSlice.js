import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  showShoppingCart: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: (state) => {
      state.cartItems = [];
      state.showShoppingCart = false;
    },
    getStoredItems: (state, action) => {
      const items = action.payload;
      if (localStorage.length !== 0) {
        const initialCartItems = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const value = parseInt(localStorage.getItem(key));
          const index = items.findIndex((item) => item._id === key);
          if (index !== -1) {
            const storedItem = {
              ...items[index],
              amount: value,
            };
            initialCartItems.push(storedItem);
          }
        }
        state.cartItems = [...initialCartItems];
      }
    },
    cartToggle: (state) => {
      state.showShoppingCart = !state.showShoppingCart;
    },
    addItem: (state, action) => {
      const shopItem = action.payload;
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.name === shopItem.name
      );
      const existingCartItem = state.cartItems[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        updatedItems = [...state.cartItems];
        updatedItems[existingCartItemIndex] = updatedItem;
        localStorage.setItem(shopItem._id, updatedItem.amount);
        state.cartItems = [...updatedItems];
      } else {
        state.cartItems.push(shopItem);
        localStorage.setItem(shopItem._id, shopItem.amount);
      }
    },
    removeItem: (state, action) => {
      const shopItem = action.payload;
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.name === shopItem.name
      );
      const existingCartItem = state.cartItems[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem.amount > 1) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.cartItems];
        updatedItems[existingCartItemIndex] = updatedItem;
        localStorage.setItem(shopItem._id, updatedItem.amount);
        state.cartItems = [...updatedItems];
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.name !== shopItem.name
        );
        localStorage.removeItem(shopItem._id);
      }
    },
  },
});

export const { cartToggle, getStoredItems, addItem, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
