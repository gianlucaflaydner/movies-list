import { gql } from "graphql-tag";

const typeDefs = gql`
  type Movie {
    title: String
    release_date: String
    overview: String
    vote_average: String
    poster_path: String
    adult: Boolean
    backdrop_path: String
    genre_ids: [Float]
    id: Float
    original_language: String
    original_title: String
    popularity: Float
    video: Boolean
    vote_count: Float
  }

  type Query {
    getMovies: [Movie]
  }
`;
export default typeDefs;
