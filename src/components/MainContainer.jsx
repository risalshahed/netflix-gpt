import { useSelector } from 'react-redux';
import VideoTitlte from './VideoTitlte';
import VideoBackground from './VideoBackground';

export default function MainContainer() {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  
  // "early return" if falsy
  if(!movies) return;

  // console.log(movies);

  // get first movie initially
  const mainMovie = movies[0];
  // console.log(mainMovie);

  // destructure title & overview
  const { id, original_title, overview } = mainMovie;

  return (
    <div className='pt-24 sm:pt-[104px] md:pt-0'>
      <VideoTitlte title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}