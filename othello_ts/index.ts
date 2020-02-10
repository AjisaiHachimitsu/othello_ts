

import Board from "./Board"
let board = new Board();
let Table: HTMLTableElement = document.getElementById("table") as HTMLTableElement;
board.Draw(Table);