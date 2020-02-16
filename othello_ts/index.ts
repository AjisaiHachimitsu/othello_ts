import Board from "./Board.js";
import OthelloIo from "./othello_io.js";


let table: HTMLTableElement;
let board: Board;
const colors = ["black", "white"];
const ninzu = 2;
let junban: number;
function start()
{
    table = document.getElementById("table") as HTMLTableElement;
    board = new Board();
    OthelloIo.start(table, board.size, Input);
    OthelloIo.Output(board, table, colors);
    junban = 0;
}

function Input(position: number[])
{
    //alert(position);
    if (board.Put(position, junban))
    {
        OthelloIo.Output(board, table, colors);
        junban++;
        junban %= ninzu;
    }
}


start();

