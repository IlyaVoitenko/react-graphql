import { gql } from "@apollo/client";

export const moviesQuery = gql`
  query {
    movies {
      name
      genre
    }
  }
`;
