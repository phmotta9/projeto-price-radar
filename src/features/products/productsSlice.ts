import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from './types';
import { products } from './mockProducts';

const initialState: Product[] = products;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const product = state.find((p) => p.id === action.payload);
      if (product) {
        product.isFavorite = !product.isFavorite;
      }
    },
  },
});

export const { toggleFavorite } = productsSlice.actions;
export default productsSlice.reducer;