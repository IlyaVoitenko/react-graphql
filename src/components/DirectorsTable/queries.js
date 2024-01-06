import { gql } from "@apollo/client";

export const moviesQuery = gql`
  query {
    directors {
      name
      age
    }
  }
`;
