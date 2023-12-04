import React from "react";
import { useSelector } from "react-redux";

import FilmPost from "./FilmPost";

const FilmList = ({ search, starrate }) => {
  const { films } = useSelector((state) => state);
  return (
    <div
      className="App"
      style={{
        display: "flex",

        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "40px",
      }}
    >
      {films.map((el) => (
        <FilmPost el={el} key={el.id} />
      ))}
    </div>
  );
};

export default FilmList;
