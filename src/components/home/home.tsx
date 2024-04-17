import MoviesList from "../movies-list/movies-list";
import { formatMoviesToDisplay } from "@/helpers/format-movies";
import { useQuery, gql } from "@apollo/client";

export default function HomeComponent() {
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

  const { data, loading } = useQuery(GET_MOVIES);

  const movies =
    data !== undefined ? formatMoviesToDisplay(data?.getMovies) : [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between xl:p-24 p-12">
      <MoviesList movies={movies} loading={loading} />
    </main>
  );
}
