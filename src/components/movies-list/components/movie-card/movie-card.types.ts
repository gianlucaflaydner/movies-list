type Movie = {
  title: string;
  poster: string;
  releaseDate: string;
  rating: number;
  overview: string;
};

interface MovieCardProps {
  movie: Movie;
}

export type { MovieCardProps, Movie };
