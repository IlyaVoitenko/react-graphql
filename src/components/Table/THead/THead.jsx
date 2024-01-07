const THead = ({ data }) => {
  let fielsData = null;

  if (data && data.length > 0) {
    fielsData = Object.keys(data[0]);
  }

  return (
    <thead>
      <tr>
        {fielsData &&
          fielsData.map((item, index) => <th key={index}>{item}</th>)}
      </tr>
    </thead>
  );
};

export default THead;
