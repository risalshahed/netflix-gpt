import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import Header from './Global/Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector, useDispatch } from 'react-redux'

export default function Browse() {
  // 1 conditional rendering of Components (at first fetch gpt search data from store)
  // store.state_name.action_name
  const showGptSearch = useSelector(store => store.gpt?.showGptSearch);

  // 2.2 conditionally render component
  const renderConditionalComponent =
    showGptSearch
    ?
    <GPTSearch />
    :
    <>
      <MainContainer />
      <SecondaryContainer />
    </>


  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {/* 2.1 we need to render component conditionally */}
      {/* <MainContainer />
      <SecondaryContainer />
      <GPTSearch /> */}
      {renderConditionalComponent}
    </div>
  )
}