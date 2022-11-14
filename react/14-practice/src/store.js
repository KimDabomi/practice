import { configureStore } from '@reduxjs/toolkit';
import DepartmentSlice from './slices/DepartmentSlice';

const store = configureStore({
  reducer: {
    DepartmentSlice: DepartmentSlice
  }
});

export default store;