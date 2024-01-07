import { useMutation } from "@apollo/client";
import { addDirector, deleteDirector } from "../../DirectorsTable/mutations";
import { addMovie, deleteMovie } from "../../MoviesTable/mutations";
import {
  handleCheckCollectionRemoveItem,
  handleEditItem,
} from "../../../helpers";
import { useDispatch } from "react-redux";

const TBody = ({ data }) => {
  const dispatch = useDispatch();

  const [newMovie] = useMutation(addMovie);
  const [removeMovie] = useMutation(deleteMovie);

  const [newDirector] = useMutation(addDirector);
  const [removeDirector] = useMutation(deleteDirector);

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
                  handleCheckCollectionRemoveItem(
                    { removeDirector, removeMovie },
                    item.__typename,
                    item.id
                  )
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
                onClick={() =>
                  handleEditItem(dispatch, item.id, item.__typename, "Edit")
                }
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
