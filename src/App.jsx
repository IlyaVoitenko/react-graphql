import "./App.css";
import MoviesTable from "./components/MoviesTable";
import DirectorsTable from "./components/DirectorsTable";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<MoviesTable />} errorElement={<p>error</p>}/>
      <Route path="/directors" element={<DirectorsTable />} errorElement={<p>error</p>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
