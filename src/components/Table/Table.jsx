import THead from "./THead";
import TBody from "./TBody";

const Table = ({ data }) => {
  return (
    <table className="table-fixed">
      <THead data={data} />
      <TBody data={data} />
    </table>
  );
};

export default Table;
