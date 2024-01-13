import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useSelector, useDispatch } from 'react-redux';

export default function useUpcomingMovies() {
  const dispatch = useDispatch();

  // ****** STOP REFETCHING API! Data API theke fetch hoye "store" a save howar pore, abr ki REFETCH er dorkar ase? It's completely UNNECESSARY
  // 1 get data with useSelector
  const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);
  
  const getUpcomingMovies = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const data = await res.json();
    // console.log(data.results);
    dispatch(addUpcomingMovies(data.results));
  }

  useEffect(() => {
    // 2 MAKE the API CALL If & Only If "upcomingMovies" is NOT there!
    upcomingMovies || getUpcomingMovies();
  },[]);
}