import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ratingService from './ratingService';

const initialState = {
  ratings: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getRatings = createAsyncThunk(
  'ratings/getRatings',
  async (productId, thunkAPI) => {
    try {
      return await ratingService.getRatings(productId);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const ratingSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    reset: (state) => {
      state.ratings = {};
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRatings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRatings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ratings = action.payload;
      })
      .addCase(getRatings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = ratingSlice.actions;
export default ratingSlice.reducer;
