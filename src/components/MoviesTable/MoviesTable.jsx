import { useQuery } from "@apollo/client";
import { moviesQuery } from "./queries";
import { useEffect, useState } from "react";

import Table from "../Table";
import Navbar from "../Navbar";

const MoviesTable = () => {
  const [moviesList, setMoviesList] = useState();
  const { loading, error, data } = useQuery(moviesQuery);

  useEffect(() => {
    if (!loading) return setMoviesList(data.movies);
  }, [data, loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className=" h-screen">
      <Navbar />
      <Table data={moviesList} />
    </div>
  );
};
export default MoviesTable;
