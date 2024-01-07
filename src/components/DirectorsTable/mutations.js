import { gql } from "@apollo/client";

export const addDirector = gql`
  mutation ($name: String!, $age: Int!) {
    addDirector(name: $name, age: $age) {
      name
      age
    }
  }
`;

export const deleteDirector = gql`
  mutation ($id: ID!) {
    deleteDirector(id: $id) {
      name
      age
    }
  }
`;

export const updateDirector = gql`
  mutation ($id: ID!, $name: String!, $age: Int!) {
    updateDirector(id: $id, name: $name, age: $age) {
      id
      name
      genre
    }
  }
`;
