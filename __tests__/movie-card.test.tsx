import React from "react";
import { render } from "@testing-library/react";
import MovieCard from "@/components/movies-list/components/movie-card/movie-card";

let mockIsDesktop = false;
jest.mock("../src/hooks/use-media-context", () => {
  return jest.fn(() => ({
    isDesktop: mockIsDesktop,
  }));
});
const mockMovie = {
  title: "Test Movie 1",
  overview: "This is a test movie 1",
  poster_path: "/test-poster.jpg",
  vote_average: "7.5",
  release_date: "2022-04-15",
};

const mockMovieMobile = {
    title: "Test Movie 2",
    overview: "This is a test movie 2",
    poster_path: "/test-poster.jpg",
    vote_average: "8.5",
    release_date: "2022-04-16",
}

describe("MovieCard component", () => {
  mockIsDesktop = true;

  it("renders desktop movie card correctly", () => {
    const { getByText, getByAltText } = render(<MovieCard movie={mockMovie} />);
    expect(getByText("Test Movie 1")).toBeInTheDocument();
    expect(getByText("This is a test movie 1")).toBeInTheDocument();
    expect(getByAltText("Poster do filme Test Movie 1")).toBeInTheDocument();
    expect(getByText("Release date: 2022-04-15")).toBeInTheDocument();
    expect(getByText("7.5")).toBeInTheDocument();
  });

  it("renders mobile movie card correctly", () => {
    mockIsDesktop = false;

    const { getByText, getByAltText } = render(<MovieCard movie={mockMovieMobile} />);
    expect(getByText("Test Movie 2")).toBeInTheDocument();
    expect(getByText("This is a test movie 2")).toBeInTheDocument();
    expect(getByAltText("Poster do filme Test Movie 2")).toBeInTheDocument();
    expect(getByText("8.5")).toBeInTheDocument();
  });
});
