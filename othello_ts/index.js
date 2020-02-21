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
    ShowMessage(junban);
}
let msg = document.getElementById("message");
function Input(position) {
    //alert(position);
    if (board.Put(position, junban)) {
        OthelloIo.Output(board, table, colors);
        msg.innerHTML = "";
        let passCount = 0;
        do {
            junban++;
            junban %= ninzu;
            ShowMessage(junban);
            if (board.GetPutAbles(junban).length === 0)
                msg.innerHTML += "パス<br>";
            if (passCount >= ninzu) {
                msg.innerHTML = "ゲーム終了";
                table.onclick = function () { };
                return;
            }
            passCount++;
        } while (board.GetPutAbles(junban).length === 0);
    }
}
function ShowMessage(junban) {
    msg.innerHTML += '<span style="color:' + colors[junban] + '">●</span>の番です。<br>';
}
start();
//# sourceMappingURL=index.js.map