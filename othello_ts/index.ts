import Board from "./Board.js";
import OthelloIo from "./othello_io.js";
let othelloIo = OthelloIo;
Othello();


function Othello()
{
    let board = new Board();
    let table: HTMLTableElement = document.getElementById("table") as HTMLTableElement;
    const colors = ["black", "white"];
    //const othelloIo = new OthelloIo(board, table, colors);
    othelloIo.start(table, 8);
    othelloIo.Output(board, table, colors);
    const ninzu = 2;
    let junban = 0;
    //while (true)
    {
        let input: number[];
        othelloIo.Input(table,board,junban,Input);
        othelloIo.Output(board, table, colors);
        junban++;
        junban %= ninzu;
    }
}

function Input(position:number[], board:Board,junban:number)//: boolean
{
    board.Put(position, junban);
}