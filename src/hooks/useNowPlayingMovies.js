import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useSelector, useDispatch } from 'react-redux';

export default function useNowPlayingMovies() {
  const dispatch = useDispatch();

  // ****** STOP REFETCHING API! Data API theke fetch hoye "store" a save howar pore, abr ki REFETCH er dorkar ase? It's completely UNNECESSARY
  // 1 get data with useSelector
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
  
  const getPlayingMovies = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const data = await res.json();
    dispatch(addNowPlayingMovies(data.results));
  }

  useEffect(() => {
    // 2 MAKE the API CALL If & Only If "nowPlayingMovies" is NOT there!
    nowPlayingMovies || getPlayingMovies();
    // similar as above
    // !nowPlayingMovies && getPlayingMovies();
    // another way
    // if(!nowPlayingMovies) getPlayingMovies();
  },[])
}