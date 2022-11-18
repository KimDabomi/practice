import { configureStore } from '@reduxjs/toolkit';
import TrafficAccSlice from './slices/TrafficAccSlice';

const store = configureStore({
  reducer: {
    TrafficAccSlice: TrafficAccSlice
  }
});

export default store;