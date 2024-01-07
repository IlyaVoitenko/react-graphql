import { useQuery } from "@apollo/client";
import { moviesQuery } from "./queries";
import { useEffect, useState } from "react";
import CreateBtn from "../CreateBtn";
import Table from "../Table";
import Navbar from "../Navbar";

const MoviesTable = () => {
  const [moviesList, setMoviesList] = useState();
  const { loading, error, data } = useQuery(moviesQuery, { pollInterval: 500 });

  useEffect(() => {
    if (!loading) return setMoviesList(data.movies);
  }, [data, loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className=" h-screen flex flex-col">
      <Navbar />
      <CreateBtn collection={"Movie"} />
      <Table data={moviesList} />
    </div>
  );
};
export default MoviesTable;
