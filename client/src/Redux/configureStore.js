import { configureStore } from '@reduxjs/toolkit';
import causesReducer from './homeSlice';


const store = configureStore({
  reducer: {
    cause:causesReducer.reducer,
  },
});

export default store;
