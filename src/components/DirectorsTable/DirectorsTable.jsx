import { useQuery } from "@apollo/client";
import { directorsQuery } from "./queries";
import { useEffect, useState } from "react";
import CreateBtn from "../CreateBtn";

import Table from "../Table";
import Navbar from "../Navbar";

const DirectorsTable = () => {
  const [directorsList, setDirectorsList] = useState();
  const { loading, error, data } = useQuery(directorsQuery, {
    pollInterval: 500,
  });

  useEffect(() => {
    if (!loading) return setDirectorsList(data.directors);
  }, [data, loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="h-screen">
      <Navbar />
      <CreateBtn collection={"Directors"} />
      <Table data={directorsList} />
    </div>
  );
};

export default DirectorsTable;
