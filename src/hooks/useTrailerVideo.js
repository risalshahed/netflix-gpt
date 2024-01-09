import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from 'react-redux';

export default function useTrailerVideo(movieId) {
  // 6.2 get trailer video with useSelector
  // In VideoBackGround Component
  // 6.1.1
  const dispatch = useDispatch();

  // 1 get video trailer
  const getMovieVideos = async () => {
    // N.B. 1029575 -> id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const data = await res.json();
    // console.log(data.results);
    // 2 take the first video with type 'Trailer' (how? with "find" method); BUT, jodi kono movie er 'Trailer' e NAA thake? In that case, let's just return the first data.results
    const trailer = data.results.find(video => video.type === 'Trailer');
    // console.log(trailer.length ? trailer : data.results[0]);
    // set the key of the trailer (if any)
    // 5.2
    // setTrailerId(trailer.key);
    // ******* 6 NOW, useState use krbo na!! amra REDUX STORE a amdr "trailer" save krbo?? HOW???? yeah, through dispatch the action, just create an action of trailer in moviesSlice, we don't need separate slice for trailer
    // 6.1.2 add trailer from redux
    dispatch(addTrailerVideo(trailer));
  }

  // 3
  useEffect(() => {
    getMovieVideos();
  }, [])
}