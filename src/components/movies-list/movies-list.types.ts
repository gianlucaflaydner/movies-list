import { Movie } from "./components/movie-card/movie-card.types";

interface MoviesListProps {
  movies: Movie[];
  loading: boolean;
}

export type { MoviesListProps };
