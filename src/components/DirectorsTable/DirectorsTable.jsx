import { useQuery } from "@apollo/client";
import { directorsQuery } from "./queries";
import { useEffect, useState } from "react";

import Table from "../Table";

const DirectorsTable = () => {
  const [directorsList, setDirectorsList] = useState();
  const { loading, error, data } = useQuery(directorsQuery);

  useEffect(() => {
    if (!loading) return setDirectorsList(data.directors);
  }, [data, loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <Table data={directorsList} />;
};

export default DirectorsTable