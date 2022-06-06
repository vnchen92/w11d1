import React from "react";
import ReactDOM from "react-dom";
import Board from "./board";
import Game from "./game";
import Tile from "./tile";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const hello = <h1>Hello, Welcome to React!!</h1>;

  ReactDOM.render(<Game />, root);
});
