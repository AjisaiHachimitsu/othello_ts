import Board from "./Board.js";
import OthelloIo from "./othello_io.js";
let table;
let board;
const colors = ["black", "white"];
const ninzu = 2;
let junban;
function start() {
    table = document.getElementById("table");
    board = new Board();
    OthelloIo.start(table, board.size, Input);
    OthelloIo.Output(board, table, colors);
    junban = 0;
}
function Input(position) {
    //alert(position);
    if (board.Put(position, junban)) {
        OthelloIo.Output(board, table, colors);
        junban++;
        junban %= ninzu;
    }
}
start();
//# sourceMappingURL=index.js.map