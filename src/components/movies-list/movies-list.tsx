import Spinner from "../spinner/spinner";
import MovieCard from "./components/movie-card/movie-card";
import { MoviesListProps } from "./movies-list.types";

export default function MoviesList(props: MoviesListProps) {
  const { movies, loading } = props;
  if (loading)
    return (
      <section className="flex items-center justify-center w-full h-screen">
        <Spinner />
      </section>
    );

  return (
    <section
      className="flex items-center flex-col w-full h-screen gap-5 "
      data-testid="movie-list"
    >
      <h1 className="text-4xl text-white font-bold"> Movies List</h1>
      {movies.map((movie: any) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </section>
  );
}
