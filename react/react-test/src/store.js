import { configureStore } from '@reduxjs/toolkit';
import Covid19Slice from './slices/Covid19Slice';

const store = configureStore({
  reducer: {
    Covid19Slice: Covid19Slice
  }
});

export default store;