import Board from "./Board.js";
import OthelloIo from "./othello_io.js";


let table: HTMLTableElement;
let board: Board;
const colors = ["black", "white","blue","red"];
const ninzu = 2;
const size = 8;
const dimension=2
let junban: number;
function start()
{
    table = document.getElementById("table") as HTMLTableElement;
    board = new Board(dimension,size,ninzu);
    OthelloIo.start(table, board.size, Input);
    OthelloIo.Output(board, table, colors);
    junban = 0;
    ShowMessage(junban);

}
let msg = document.getElementById("message")

function Input(position: number[])
{
    //alert(position);
    if (board.Put(position, junban))
    {
        OthelloIo.Output(board, table, colors);
        msg.innerHTML = "";
        let passCount = 0;
        do
        {
            junban++;
            junban %= ninzu;
            ShowMessage(junban);
            if (board.GetPutAbles(junban).length === 0)
                msg.innerHTML += "パス<br>";
            if (passCount >= ninzu)
            {
                msg.innerHTML+= "ゲーム終了";
                table.onclick = function ()
                { } ;
                return;
            }
            passCount++;
        } while (board.GetPutAbles(junban).length === 0)
    }
}
function ShowMessage(junban: number)
{
    msg.innerHTML += '<span style="color:' + colors[junban] + '">●</span>の番です。<br>'
        + String(board.CountEachStone())+"<br>";
}

start();

