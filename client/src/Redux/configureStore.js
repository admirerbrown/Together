import { configureStore } from '@reduxjs/toolkit';
import causesReducer from './homeSlice';
import donationReducer from './formAction';


const store = configureStore({
  reducer: {
    cause:causesReducer.reducer,
    donation:donationReducer.reducer,
  },
});

export default store;
