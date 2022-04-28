import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import sliderImageReducer from '../features/sliderImage/sliderImageSlice';
import SliderMyPhotosReducer from '../features/sliderMyPhotos/SliderMyPhotosSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    images:sliderImageReducer,
    myImages:SliderMyPhotosReducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
