type Movie = {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
};

interface MovieCardProps {
  movie: Movie;
}

export type { MovieCardProps, Movie };
