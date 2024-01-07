import { useMutation } from "@apollo/client";
import {
  setIsOpenModal,
  setCollectionModal,
  setModeModal,
  setIdItem,
} from "../../../store/reduces/modal";
import {
  addDirector,
  updateDirector,
  deleteDirector,
} from "../../DirectorsTable/mutations";
import {
  addMovie,
  deleteMovie,
  updateMovie,
} from "../../MoviesTable/mutations";
import { useDispatch } from "react-redux";

const TBody = ({ data }) => {
  const dispatch = useDispatch();

  const [newMovie] = useMutation(addMovie);
  const [removeMovie] = useMutation(deleteMovie);
  const [moderniseMovie] = useMutation(updateMovie);

  const [newDirector] = useMutation(addDirector);
  const [moderniseDirector] = useMutation(updateDirector);
  const [removeDirector] = useMutation(deleteDirector);

  const handleEditItem = (id, collection, mode) => {
    dispatch(setCollectionModal(collection));
    dispatch(setIdItem(id));
    dispatch(setModeModal(mode));
    dispatch(setIsOpenModal());
  };

  const handleCheckCollectionRemoveItem = (__typename, id) => {
    return __typename === "Directors"
      ? handleRemoveDirector(id)
      : handleRemoveMovie(id);
  };
  const handleRemoveMovie = async (id) => {
    const { data } = await removeMovie({
      variables: {
        id,
      },
    });
    return data;
  };
  const handleRemoveDirector = async (id) => {
    const { data } = await removeDirector({
      variables: {
        id,
      },
    });
    return data;
  };

  return (
    <tbody>
      {data &&
        data.map((item) => (
          <tr key={item.id}>
            <td>{item.__typename}</td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.genre || item.age}</td>
            <td>
              <button
                className="bg-red-600"
                onClick={() =>
                  handleCheckCollectionRemoveItem(item.__typename, item.id)
                }
              >
                Delete
              </button>
            </td>
            <td>
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={() => handleEditItem(item.id, item.__typename, "Edit")}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default TBody;
