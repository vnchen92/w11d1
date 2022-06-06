import React from "react";
import ReactDOM from "react-dom";
import * as Minesweeper from "../minesweeper.js";
import Board from "./board";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: new Minesweeper.Board(9, 30),
    };
    // console.log(this.state.board.grid);
  }

  updateGame = () => {};

  render = () => {
    return (
      <div id="board-container">
        {/* <h1>{this.state.board}</h1> */}
        <Board boardProp={this.state.board} updateGameProp={this.updateGame} />
      </div>
    );
  };
}
