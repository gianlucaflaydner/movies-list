import { formatDate } from "./format-date";
import { Movie } from "@/components/movies-list/components/movie-card/movie-card.types";

function formatMoviesToDisplay(movies: Movie[]) {
  console.log(movies, "movies");
  const formattedMovies = movies.map((movie: any) => ({
    title: movie.title,
    poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    release_date: formatDate(movie.release_date),
    vote_average: parseFloat(movie.vote_average).toFixed(1),
    overview: movie.overview,
  }));

  return formattedMovies;
}

export { formatMoviesToDisplay };
