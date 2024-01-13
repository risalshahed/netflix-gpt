
import MovieList from "./MovieList";
import { useSelector } from 'react-redux'

export default function SecondaryContainer() {
  const movies = useSelector(store => store.movies);

  // **************** "early return" if falsy (here, null) ****************
  if(!movies) return;

  return (
    <div className="bg-black text-white">
      <div className="mt-0 md:-mt-64 relative z-20">
        <MovieList title={'Now Playing'} movies={movies?.nowPlayingMovies} />
        <MovieList title={'Top Rated'} movies={movies?.topRatedMovies} />
        <MovieList title={'Popular'} movies={movies?.popularMovies} />
        <MovieList title={'Upcoming'} movies={movies?.upcomingMovies} />
      </div>
    </div>
  )
}