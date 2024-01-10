import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from 'react-redux';

export default function useUpcomingMovies() {
  const dispatch = useDispatch();
  // login hoile ei route
  // 1 let's fetch data from API & update the "store"
  
  // 1.1 Declare the API
  const getUpcomingMovies = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const data = await res.json();
    // console.log(data.results);
    // 1.3 dispatch the "addUpcomingMovies" action & push "data.results" inside my store
    dispatch(addUpcomingMovies(data.results));
  }

  // 1.2 CALL the API
  useEffect(() => {
    getUpcomingMovies();
  },[]);

  // V.V.V.V.V.V.V.I. 1.2.1 assa, ei API call soho onk kisu, 2 bar (TWO TIMES) RENDER hy kn????? It's due to "React.StrictMode", ei StrictMode ONLY LOCAL SERVER a ONEK KISUI 2 bar RENDER kre (It is a react thing), BUT DEVELOPMENT a eita EKBAR e (ONE TIME) RENDER hbe
  // ******* 1.2.2 ok bujhlm "React.StrictMode" tahole ei EXTRA RENDERING kn kre?? React ashole app a INCONSITENCY CHECK krar jnnoi ei ONE TIME EXTRA RENDER kre 
}