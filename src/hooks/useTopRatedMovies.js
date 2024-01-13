import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useSelector, useDispatch } from 'react-redux';

export default function useTopRatedMovies() {
  const dispatch = useDispatch();

  // ****** STOP REFETCHING API! Data API theke fetch hoye "store" a save howar pore, abr ki REFETCH er dorkar ase? It's completely UNNECESSARY
  // 1 get data with useSelector
  const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);
  
  const getTopRatedMovies = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const data = await res.json();
    dispatch(addTopRatedMovies(data.results));
  }

  useEffect(() => {
    // 2 MAKE the API CALL If & Only If "topRatedMovies" is NOT there!
    topRatedMovies || getTopRatedMovies();
  },[]);
}