import Board from "./Board.js";
import OthelloIo from "./othello_io.js";
let board = new Board();
let table = document.getElementById("table");
const colors = ["black", "white"];
const othelloIo = new OthelloIo(board, table, colors);
othelloIo.Output();
//# sourceMappingURL=index.js.map