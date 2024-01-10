import { useSelector } from 'react-redux'
import VideoTitlte from './VideoTitlte';
import VideoBackground from './VideoBackground';

export default function MainContainer() {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  
  // **************** "early return" if falsy (here, null) ****************
  if(!movies) return;

  // get first movie initially
  const mainMovie = movies[0];
  // console.log(mainMovie);

  // destructure title & overview
  const { id, original_title, overview } = mainMovie;

  return (
    <div>
      <VideoTitlte title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}