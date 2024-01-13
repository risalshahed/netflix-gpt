import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useSelector, useDispatch } from 'react-redux';

export default function usePopularMovies() {
  const dispatch = useDispatch();

  // ****** STOP REFETCHING API! Data API theke fetch hoye "store" a save howar pore, abr ki REFETCH er dorkar ase? It's completely UNNECESSARY
  // 1 get data with useSelector
  const popularMovies = useSelector(store => store.movies?.popularMovies);
  
  const getPopularMovies = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const data = await res.json();
    dispatch(addPopularMovies(data.results));
  }

  useEffect(() => {
    // 2 MAKE the API CALL If & Only If "popularMovies" is NOT there!
    popularMovies || getPopularMovies();
  },[]);
}