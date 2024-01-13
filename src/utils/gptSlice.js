import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResult: null
  },
  reducers: {
    toggleGptSearchView: state => {
      state.showGptSearch = !state.showGptSearch
    },
    addGptMovieResult: (state, action) => {
      state.movieNames = action.payload.movieNames,
      state.movieResult = action.payload.movieResult
      // destructure
      /* const { movieNames, movieResult } = action.payload;
      // state.gptMovies = action.payload
      state.movieNames = movieNames,
      state.movieResult = movieResult */
    }
  }
})

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;