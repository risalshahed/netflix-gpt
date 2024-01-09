import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import moviesSlice from './moviesSlice';

const appStore = configureStore({
  // this store takes a configuration & this configuration will have a reducer
  reducer: {
    // ***** this reducer will gave different reducers from different slices
    user: userSlice,
    movies: moviesSlice
  }
})

export default appStore;