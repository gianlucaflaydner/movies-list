import MovieCard from "./components/movie-card/movie-card";
import { MoviesListProps } from "./movies-list.types";

export default function MoviesList(props: MoviesListProps) {

  const { movies } = props;
  return <section className="flex items-center flex-col w-full h-screen gap-5 ">
    {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}

  </section>;
}
