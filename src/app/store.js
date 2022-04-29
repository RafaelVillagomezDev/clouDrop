import { configureStore } from '@reduxjs/toolkit';

// import counterReducer from '../features/counter/counterSlice';
import sliderImageReducer from '../features/sliderImage/sliderImageSlice';
// import sliderMyPhotosReducer from '../features/sliderMyPhotos/sliderMyPhotosSlice'


export const store = configureStore({
  reducer: {
    
    images:sliderImageReducer,
    // myImages:sliderMyPhotosReducer
    
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
