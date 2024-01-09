import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  // set initial states
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null
  },
  reducers: {
    // set actions
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    }
  }
})

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;