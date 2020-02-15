import Board from "./Board.js";
import OthelloIo from "./othello_io.js";
let board = new Board();
let table: HTMLTableElement = document.getElementById("table") as HTMLTableElement;
const colors = ["black", "white"];
const othelloIo = new OthelloIo(board, table, colors);
othelloIo.Output();
