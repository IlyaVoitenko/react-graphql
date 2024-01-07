import { useDispatch } from "react-redux";
import {
  setIsOpenModal,
  setModeModal,
  setCollectionModal,
} from "../../store/reduces/modal";
import { useEffect } from "react";

const CreateBtn = ({ collection }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModeModal("Create"));
    dispatch(setCollectionModal(collection));
  }, [dispatch, collection]);

  return (
    <button
      data-modal-target="default-modal"
      data-modal-toggle="default-modal"
      className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
      onClick={() => dispatch(setIsOpenModal())}
    >
      Create
    </button>
  );
};

export default CreateBtn;
