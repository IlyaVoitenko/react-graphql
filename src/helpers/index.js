import {
  setIsOpenModal,
  setCollectionModal,
  setModeModal,
  setIdItem,
} from "../store/reduces/modal";

//create and update items of movie
export const handleCheckCreatOrEditMovie = async (
  mutation,
  modeModal,
  id,
  genre,
  name,
  directorId
) => {
  return modeModal === "Edit"
    ? await handleEditMovie(mutation, id, genre, name, directorId)
    : await handleCreateMovie(mutation, genre, name, directorId);
};
export const handleEditMovie = async (
  { editMovie },
  id,
  genre,
  name,
  directorId
) => {
  const { data } = await editMovie({
    variables: {
      id,
      genre,
      name,
      directorId,
    },
  });
  return data;
};
export const handleCreateMovie = async (
  { createMovie },
  genre,
  name,
  directorId
) => {
  const { data } = await createMovie({
    variables: {
      genre,
      name,
      directorId,
    },
  });
  return data;
};
//create and update items of directors
export const handleCheckCreatOrEditDirector = async (
  mutation,
  modeModal,
  id,
  age,
  name
) => {
  return modeModal === "Edit"
    ? await handleEditDirector(mutation, id, name, age)
    : await handleCreateDirector(mutation, age, name);
};
const handleEditDirector = async ({ editDirector }, id, age, name) => {
  const ageNumber = +age;
  const { data } = await editDirector({
    variables: {
      id,
      name,
      age: ageNumber,
    },
  });
  return data;
};
const handleCreateDirector = async ({ createDirector }, age, name) => {
  const ageNumber = +age;
  const { data } = await createDirector({
    variables: {
      name,
      age: ageNumber,
    },
  });
  console.log(data);
  return data;
};
//remove item
export const handleCheckCollectionRemoveItem = (
  { removeMovie, removeDirector },
  __typename,
  id
) => {
  return __typename === "Directors"
    ? handleRemoveDirector(id, removeDirector)
    : handleRemoveMovie(id, removeMovie);
};
const handleRemoveMovie = async (id, removeMovie) => {
  console.log(id);
  const { data } = await removeMovie({
    variables: {
      id: id,
    },
  });
  console.log(data);
  return data;
};
const handleRemoveDirector = async (id, removeDirector) => {
  const { data } = await removeDirector({
    variables: {
      id,
    },
  });
  return data;
};
//open edit modal
export const handleEditItem = (dispatch, id, collection, mode) => {
  dispatch(setCollectionModal(collection));
  dispatch(setIdItem(id));
  dispatch(setModeModal(mode));
  dispatch(setIsOpenModal());
};
