import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from 'react-redux';

export default function useTopRatedMovies() {
  const dispatch = useDispatch();
  // login hoile ei route
  // 1 let's fetch data from API & update the "store"
  
  // 1.1 Declare the API
  const getTopRatedMovies = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const data = await res.json();
    // console.log(data.results);
    // 1.3 dispatch the "addTopRatedMovies" action & push "data.results" inside my store
    dispatch(addTopRatedMovies(data.results));
  }

  // 1.2 CALL the API
  useEffect(() => {
    getTopRatedMovies();
  },[]);

  // V.V.V.V.V.V.V.I. 1.2.1 assa, ei API call soho onk kisu, 2 bar (TWO TIMES) RENDER hy kn????? It's due to "React.StrictMode", ei StrictMode ONLY LOCAL SERVER a ONEK KISUI 2 bar RENDER kre (It is a react thing), BUT DEVELOPMENT a eita EKBAR e (ONE TIME) RENDER hbe
  // ******* 1.2.2 ok bujhlm "React.StrictMode" tahole ei EXTRA RENDERING kn kre?? React ashole app a INCONSITENCY CHECK krar jnnoi ei ONE TIME EXTRA RENDER kre 
}