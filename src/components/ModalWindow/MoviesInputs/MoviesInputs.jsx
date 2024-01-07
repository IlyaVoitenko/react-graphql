import { useEffect, useState } from "react";
import { getModeModal, getIdCollectionItem } from "../../../store/selectors";
import { useQuery, useMutation } from "@apollo/client";
import { directorsQuery } from "../../DirectorsTable/queries";
import { TextInput, Dropdown } from "flowbite-react";
import { addMovie, updateMovie } from "../../MoviesTable/mutations";
import { handleCheckCreatOrEditMovie } from "../../../helpers";
import { useSelector } from "react-redux";

const MoviesInputs = () => {
  const { loading, error, data } = useQuery(directorsQuery);
  const modeModal = useSelector(getModeModal);
  const idCollectionItem = useSelector(getIdCollectionItem);

  const [editMovie] = useMutation(updateMovie);
  const [createMovie] = useMutation(addMovie);

  const [listDirectors, setListDirectors] = useState([]);

  const [selcetedDirector, setSelcetedDirector] = useState("Select director");
  const [name, setName] = useState("");
  const [directorId, setDirectorId] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (!loading) return setListDirectors(data.directors);
  }, [data, loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <div className="mt-2 mb-2">
        <TextInput
          id="name"
          placeholder="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
      </div>
      <div className="mt-2 mb-2">
        <TextInput
          id="genre"
          placeholder="genre"
          value={genre}
          onChange={({ target }) => setGenre(target.value)}
          required
        />
      </div>
      <div className="flex justify-center mt-2 mb-2">
        <Dropdown label={selcetedDirector} dismissOnClick={false} required>
          {listDirectors &&
            listDirectors.map(({ id, name }) => (
              <Dropdown.Item
                key={id}
                onClick={() => {
                  setSelcetedDirector(name);
                  setDirectorId(id);
                }}
              >
                {name}
              </Dropdown.Item>
            ))}
        </Dropdown>
      </div>
      <div className="flex justify-center mt-2 mb-2">
        <button
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() =>
            handleCheckCreatOrEditMovie(
              { editMovie, createMovie },
              modeModal,
              idCollectionItem,
              genre,
              name,
              directorId
            )
          }
        >
          {modeModal}
        </button>
      </div>
    </div>
  );
};

export default MoviesInputs;
