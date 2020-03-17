﻿import Board from "./Board.js";
import OthelloIo from "./othello_io.js";


let table: HTMLTableElement;
let board: Board;
const colors = ["black", "white","blue","red","yellow","purple","pink","skyblue"];
const ninzu = 2;
const size = 4;
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
                Finish();
               return;
            }
            passCount++;
        } while (board.GetPutAbles(junban).length === 0)
    }
}
function ShowMessage(junban: number):void
{
    msg.innerHTML += '<span style="color:' + colors[junban] + '">●</span>の番です。<br>';
    for (let i = 0; i < ninzu; i++)
    {
        msg.innerHTML += '<span style="color:' + colors[i] + '">●</span> ' + String(board.CountEachStone()[i]) + '<br>';
    }
        //+ String(board.CountEachStone())+"<br>";
}

function Finish():void
{
    msg.innerHTML += "ゲーム終了<br>";
    let maxIndex: number[] = [0];
    let max = board.CountEachStone()[0];
    for (let i = 1; i <ninzu; i++)
    {
        if (board.CountEachStone()[i] > max)
        {
            max = board.CountEachStone()[i];
            maxIndex = [i];
        }
        else if (board.CountEachStone()[i] === max)
        {
            maxIndex.push(i);
        }
    }
    if (maxIndex.length === ninzu)
    {
        msg.innerHTML += '引き分けです';
    }
    else
    {
        for (let item of maxIndex)
        {
            msg.innerHTML += '<span style="color:' + colors[item] + '">●</span> ';
        }
        msg.innerHTML += 'の勝ちです';
    }
    table.onclick = function ()
    { };
}
start();

