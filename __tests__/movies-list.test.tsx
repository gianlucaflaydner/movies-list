import React from "react";
import { render } from "@testing-library/react";

import { Movie } from "@/components/movies-list/components/movie-card/movie-card.types";
import MoviesList from "@/components/movies-list/movies-list";

describe("MoviesList component", () => {
  it("renders loading spinner when loading is true", async () => {
    const movies: Movie[] = [];
    const loading = true;

    const { getByTestId } = render(
      <MoviesList movies={movies} loading={loading} />
    );

    const spinnerElement = getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  it("renders movie list when loading is false", async () => {
    const movies = [
      {
        title: "Movie 1",
        release_date: "2023-01-01",
        vote_average: "7.5",
        overview: "Overview of Movie 1",
        poster_path: "/poster1.jpg",
      },
      {
        title: "Movie 2",
        release_date: "2023-02-01",
        vote_average: "8.0",
        overview: "Overview of Movie 2",
        poster_path: "/poster2.jpg",
      },
    ];
    const loading = false;

    const { getByText } = render(
      <MoviesList movies={movies} loading={loading} />
    );

    expect(getByText("Movies List")).toBeInTheDocument();
    expect(getByText("Movie 1")).toBeInTheDocument();
    expect(getByText("Movie 2")).toBeInTheDocument();
  });
});
