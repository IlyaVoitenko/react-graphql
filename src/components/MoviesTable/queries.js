import { gql } from "@apollo/client";

export const moviesQuery = gql`
  query {
    movies {
      id
      name
      genre
    }
  }
`;
