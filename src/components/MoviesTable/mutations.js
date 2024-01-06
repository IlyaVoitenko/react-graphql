import { gql } from "@apollo/client";

export const addMovie = gql`
  mutation ($name: String!, $genre: String!, $directorId: ID) {
    addMovie(name: $name, genre: $genre, directorId: $directorId) {
      name
      genre
    }
  }
`;

export const updateMovie = gql`
  mutation ($id: ID!, $name: String!, $genre: String!, $directorId: ID) {
    updateMovie(id: $id, name: $name, genre: $genre, directorId: $directorId) {
      id
      name
      genre
    }
  }
`;
