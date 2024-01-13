import { useSelector } from 'react-redux';
import MovieList from './MovieList';

export default function GPTMovieSuggestions() {
  const gpt = useSelector(store => store.gpt);
  const { movieNames, movieResult } = gpt;

  if(!movieNames) return;

  return (
    <div className='bg-black opacity-85 text-white p-4 m-4'>
      {/* <p>{movieNames}</p> */}
      {/* reuse 'MovieList' Component */}
      {/* <MovieList title={movieNames[0]} movies={movieResult[0]} /> */}
      {
        movieNames.map((movieName, index) =>
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        )
      }
    </div>
  )
}