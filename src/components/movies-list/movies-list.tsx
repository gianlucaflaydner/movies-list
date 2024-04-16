import { useQuery, gql } from "@apollo/client";
import MovieCard from "./components/movie-card/movie-card";
import { formatMoviesToDisplay } from "@/helpers/format-movies";

export default function MoviesList() {
  const GET_MOVIES = gql`
    query {
      getMovies {
        title
        release_date
        vote_average
        overview
        poster_path
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_MOVIES);

  const movies =
    data !== undefined ? formatMoviesToDisplay(data?.getMovies) : [];

  console.log(movies, "movies");
  return (
    <section className="flex items-center flex-col w-full h-screen gap-5 ">
      {movies.map((movie: any) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </section>
  );
}
