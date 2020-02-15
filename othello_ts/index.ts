import Board from "./Board.js";
import { Output } from "./othello_io.js";
let board = new Board();
let table: HTMLTableElement = document.getElementById("table") as HTMLTableElement;
const colors = [ "black", "white"];
Output(board, table, colors);
