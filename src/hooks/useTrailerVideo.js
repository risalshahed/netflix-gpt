import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from 'react-redux';

export default function useTrailerVideo(movieId) {
  // get trailer video with useSelector
  // In VideoBackGround Component

  const dispatch = useDispatch();

  // get video trailer
  const getMovieVideos = async () => {
    // N.B. 1029575 -> id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const data = await res.json();
    // console.log(data.results);
    const trailer = data.results.find(video => video.type === 'Trailer');
    // add trailer from redux
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    getMovieVideos();
  }, [])
}