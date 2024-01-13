import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useSelector, useDispatch } from 'react-redux';

export default function useTrailerVideo(movieId) {
  const dispatch = useDispatch();

  // ****** STOP REFETCHING API! Data API theke fetch hoye "store" a save howar pore, abr ki REFETCH er dorkar ase? It's completely UNNECESSARY
  // 1 get data with useSelector
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  // get video trailer
  const getMovieVideos = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const data = await res.json();
    // console.log(data.results);
    const trailer = data.results.find(video => video.type === 'Trailer');
    // add trailer from redux
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    // 2 MAKE the API CALL If & Only If "trailerVideo" is NOT there!
    trailerVideo || getMovieVideos();
  }, [])
}