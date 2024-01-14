import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
  // **************** "early return" if falsy (here, null) ****************
  if(!movies) return;
  
  // console.log(movies);
  /*
    1 go to the TMDB API documentation -> Guides -> Image -> Basics
    After doing so, Go to the "constants.js" & create a constant
  */

  // 2 insert poster form all of the movies
  const movieCard = movies.map(movie =>
    <MovieCard key={movie.id} movie={movie} />
  );

  return (
    <div className="px-14 py-6">
      <h2 className="text-center text-xl md:text-3xl font-bold py-4">
        {title}
      </h2>
      <div className="flex flex-wrap gap-4 justify-center py-5">
        {movieCard}
      </div>
    </div>
  )
}