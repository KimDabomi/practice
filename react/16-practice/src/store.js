import { configureStore } from '@reduxjs/toolkit';
import StudentSlice from './slices/StudentSlice';

const store = configureStore({
  reducer: {
    StudentSlice: StudentSlice
  }
});

export default store;