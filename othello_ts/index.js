import Board from "./Board.js";
import OthelloIo from "./othello_io.js";
Othello();
function Othello() {
    let board = new Board();
    let table = document.getElementById("table");
    const colors = ["black", "white"];
    const othelloIo = new OthelloIo(board, table, colors);
    othelloIo.Output();
    const ninzu = 2;
    let junban = 0;
    while (true) {
        othelloIo.Input();
        board.Put([], junban);
        othelloIo.Output();
        junban++;
        junban %= ninzu;
    }
}
//# sourceMappingURL=index.js.map