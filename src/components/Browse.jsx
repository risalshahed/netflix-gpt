import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Global/Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

export default function Browse() {
  // call the custom hook where  the data weere fetched from API & the "store" was updated
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  /* ---------------------------------------------------------------------
                        Component Structure
  --------------------------------------------------------------------- */
  /* 
      Main Container
        - Video Background
        - Video Title
      Secondary Container
        - Movie List * "m items"
          - Cards * "n items"
  */

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}