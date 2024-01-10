import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
  // **************** "early return" if falsy (here, null) ****************
  if(!movies) return;
  
  console.log(movies);
  /*
    1 go to the TMDB API documentation -> Guides -> Image -> Basics
    After doing so, Go to the "constants.js" & create a constant
  */

  // 2 insert poster form all of the movies
  const movieCard = movies.map(movie =>
    <MovieCard key={movie.id} path={movie.poster_path} />
  );

  return (
    <div className="px-14 py-6">
      <h2 className="text-center text-3xl font-bold py-4">{title}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-x-4">
          {movieCard}
        </div>
      </div>
    </div>
  )
}