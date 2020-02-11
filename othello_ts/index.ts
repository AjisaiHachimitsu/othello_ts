import Board from "./Board.js"

let board = new Board();
let table: HTMLTableElement = document.getElementById("table") as HTMLTableElement;
const colors = [ "black", "white"];
board.Draw(table, colors);
