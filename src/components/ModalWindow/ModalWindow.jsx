import { Modal } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenModal } from "../../store/reduces/modal";
import {
  getIsOpenModal,
  getCollectionModal,
  getModeModal,
} from "../../store/selectors";
import DirectorInputs from "./DirectorInputs";
import MoviesInputs from "./MoviesInputs";

const ModalWindow = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(getIsOpenModal);
  const collectionModal = useSelector(getCollectionModal);
  const modeModal = useSelector(getModeModal);

  return (
    <>
      <Modal
        show={isOpenModal}
        className="bg-slate-800"
        size="md"
        onClose={() => dispatch(setIsOpenModal())}
        popup
      >
        <Modal.Header className="bg-slate-800 ">
          <span className="text-white">
            {modeModal} {collectionModal}
          </span>
        </Modal.Header>

        <Modal.Body className="bg-slate-800">
          <div className="space-y-6">
            {collectionModal !== "Movie" ? (
              <DirectorInputs />
            ) : (
              <MoviesInputs />
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalWindow;
