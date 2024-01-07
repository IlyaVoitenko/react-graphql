import { TextInput } from "flowbite-react";
import { addDirector, updateDirector } from "../../DirectorsTable/mutations";
import { useSelector } from "react-redux";
import { getModeModal } from "../../../store/selectors";
import { useMutation } from "@apollo/client";

const DirectorInputs = () => {
  const modeModal = useSelector(getModeModal);
  const [createDirector] = useMutation(addDirector);
  const [editDirector] = useMutation(updateDirector);

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
          id="age"
          placeholder="Age director"
          value={age}
          onChange={({ target }) => setAge(target.value)}
          required
        />
      </div>
      <div className="flex justify-center mt-2 mb-2">
        <button
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => {
            console.log(directorId, name, genre);
          }}
        >
          {modeModal}
        </button>
      </div>
    </div>
  );
};

export default DirectorInputs;
