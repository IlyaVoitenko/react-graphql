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
