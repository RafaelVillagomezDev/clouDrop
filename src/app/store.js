import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import sliderImageReducer from '../features/sliderImage/sliderImageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    images:sliderImageReducer,
    
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
