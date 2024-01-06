import { useQuery } from "@apollo/client";
import { moviesQuery } from "./queries";
import { useEffect, useState } from "react";

const MoviesTable = () => {
  const [moviesList, setMoviesList] = useState();
  const { loading, error, data } = useQuery(moviesQuery);

  useEffect(() => {
    if (!loading) return setMoviesList(data.movies);
  }, [data, loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(moviesList);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};
export default MoviesTable;
