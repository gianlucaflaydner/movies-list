"use client";

import { Movie } from "@/components/movies-list/components/movie-card/movie-card.types";
import MoviesList from "@/components/movies-list/movies-list";
import SectionTitle from "@/components/section-title/section-title";
import { formatMoviesToDisplay } from "@/helpers/format-movies";
import { useEffect, useState } from "react";

const API_KEY = "7d9ddfa73ba6c435992e53a5fe7e5911";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;

export default function Home() {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const formattedMovies = formatMoviesToDisplay(data.results);
        setMovies(formattedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const [movies, setMovies] = useState<Movie[]>([]);

  console.log(movies, "movies");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between xl:p-24 p-12">
      <SectionTitle title="Movies List" />
      <MoviesList movies={movies} />
    </main>
  );
}
