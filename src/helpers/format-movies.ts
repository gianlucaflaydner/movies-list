import { APIMovie } from "@/types/movie";
import { formatDate } from "./format-date";

function formatMoviesToDisplay(movies: APIMovie[]) {
  const formattedMovies = movies.map((movie: any) => ({
    title: movie.title,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    releaseDate: formatDate(movie.release_date),
    rating: parseFloat(movie.vote_average.toFixed(1)),
    overview: movie.overview,
  }));

  return formattedMovies;
}

export { formatMoviesToDisplay };
