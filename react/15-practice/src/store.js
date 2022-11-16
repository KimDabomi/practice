import { configureStore } from '@reduxjs/toolkit';
import ProfessorSlice from './slices/ProfessorSlice';

const store = configureStore({
  reducer: {
    ProfessorSlice: ProfessorSlice
  }
});

export default store;