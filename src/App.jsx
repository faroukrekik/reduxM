import "./App.css";
import FilmList from "./components/FilmList";
import "bootstrap/dist/css/bootstrap.min.css";
import NavFilter from "./components/NavFilter";
import AddFilm from "./components/AddFilm";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const [starrate, setstarrate] = useState(1);
  const handleRating = (x) => {
    setstarrate(x);
  };
  return (
    <div>
      <NavFilter
        search={search}
        handleSearch={handleSearch}
        starrate={starrate}
        handleRating={handleRating}
      />
      <FilmList starrate={starrate} />
      <AddFilm />
    </div>
  );
}

export default App;
