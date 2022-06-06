import React from "react";
import ReactDOM from "react-dom";
import * as Minesweeper from "../minesweeper.js";
import Tile from "./tile";
import Game from "./game";

// console.log(Minesweeper.Board);
export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    // console.log("hello ");
    // console.log(this.props.boardProp.grid);
    // console.log(this.props);
    return this.props.boardProp.grid.map((row, i) => {
      return (
        <div className="row" key={i}>
          {row.map((tile, j) => {
            return (
              <div className="tile" key={j}>
                <Tile tile={tile} />
              </div>
            );
          })}
        </div>
      );
    });
  };
}
