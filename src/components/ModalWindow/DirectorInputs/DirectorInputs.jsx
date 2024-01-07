import { TextInput } from "flowbite-react";
import { addDirector, updateDirector } from "../../DirectorsTable/mutations";
import { handleCheckCreatOrEditDirector } from "../../../helpers";
import { useSelector } from "react-redux";
import { getModeModal, getIdCollectionItem } from "../../../store/selectors";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const DirectorInputs = () => {
  const modeModal = useSelector(getModeModal);
  const idCollectionItem = useSelector(getIdCollectionItem);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

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
          onClick={() =>
            handleCheckCreatOrEditDirector(
              { editDirector, createDirector },
              modeModal,
              idCollectionItem,
              age,
              name
            )
          }
        >
          {modeModal}
        </button>
      </div>
    </div>
  );
};

export default DirectorInputs;
