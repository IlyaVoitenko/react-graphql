import { useMutation } from "@apollo/client";
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

const TBody = ({ data }) => {
  const [newMovie] = useMutation(addMovie);
  const [removeMovie] = useMutation(deleteMovie);
  const [moderniseMovie] = useMutation(updateMovie);

  const [newDirector] = useMutation(addDirector);
  const [moderniseDirector] = useMutation(updateDirector);
  const [removeDirector] = useMutation(deleteDirector);

  const handleCheckCollectionRemoveItem = (__typename, id) => {
    return __typename === "Directors"
      ? handleRemoveDirector(id)
      : handleRemoveMovie(id);
  };
  const handleRemoveMovie = async (id) => {
    const { data } = await removeMovie({
      variables: {
        id: id,
      },
    });
    return data;
  };
  const handleRemoveDirector = async (id) => {
    const { data } = await removeDirector({
      variables: {
        id: id,
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
          </tr>
        ))}
    </tbody>
  );
};

export default TBody;
