import THead from "./THead";
import TBody from "./TBody";
import Modal from "../ModalWindow/ModalWindow";

const Table = ({ data }) => {
  return (
    <>
      <Modal />
      <table className="table-fixed">
        <THead data={data} />
        <TBody data={data} />
      </table>
    </>
  );
};

export default Table;
