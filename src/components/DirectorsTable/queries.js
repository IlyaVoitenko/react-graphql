import { gql } from "@apollo/client";

export const directorsQuery = gql`
  query {
    directors {
      name
      age
    }
  }
`;
