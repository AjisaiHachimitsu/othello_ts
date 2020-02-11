import Board from "./Board.js"

let board = new Board();
let Table: HTMLTableElement = document.getElementById("table") as HTMLTableElement;
const colors = [ "black", "white"];
board.Draw(Table,colors);