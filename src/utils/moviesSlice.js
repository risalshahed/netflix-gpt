import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlatingMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlatingMovies = action.payload;
    }
  }
})

export const { addNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;