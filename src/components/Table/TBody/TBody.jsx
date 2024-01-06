const TBody = ({ data }) => {
  return (
    <tbody>
      {data &&
        data.map((item) => (
          <tr key={item.id}>
            <td>{item.__typename}</td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.genre || item.age}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default TBody;
