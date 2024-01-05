import "./App.css";
import { ApolloProvider } from "@apollo/client";
import MoviesTable from "./components/MoviesTable";
import client from "./client";

function App() {
  return (
    <ApolloProvider client={client}>
      <MoviesTable />
    </ApolloProvider>
  );
}

export default App;
