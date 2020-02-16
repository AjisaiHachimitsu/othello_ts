import Board from "./Board.js";
import OthelloIo from "./othello_io.js";
let othelloIo = OthelloIo;
Othello();
function Othello() {
    let board = new Board();
    let table = document.getElementById("table");
    const colors = ["black", "white"];
    //const othelloIo = new OthelloIo(board, table, colors);
    othelloIo.start(table, 8);
    othelloIo.Output(board, table, colors);
    const ninzu = 2;
    let junban = 0;
    //while (true)
    {
        let input;
        othelloIo.Input(table, board, junban, Input);
        othelloIo.Output(board, table, colors);
        junban++;
        junban %= ninzu;
    }
}
function Input(position, board, junban) {
    board.Put(position, junban);
}
//# sourceMappingURL=index.js.map