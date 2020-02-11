﻿export default class Board
{
    readonly height: number;
    readonly width: number;
    readonly ninzu: number;
    board: number[][];
    constructor()
    {
        this.height = 8;
        this.width = 8;
        this.ninzu = 2;
        this.board = new Array(this.height);
        for (let i = 0; i < this.board.length; i++)
        {
            this.board[i] = new Array(this.width);
            for (let j = 0; j < this.board[i].length; j++)
            {
                this.board[i][j] = 0;
            }
        }
        this.board[3][4] = 1;
        this.board[4][3] = 1;
        this.board[3][3] = 2;
        this.board[4][4] = 2;
    }
    Draw(table: HTMLTableElement, colors: string[])
    {
        table.style.backgroundColor = "green";
        table.style.borderColor = "black";
        table.style.borderCollapse="collapse"
        for (let i = 0; i <= this.height; i++)
        {
            table.insertRow(-1);
            for (let j = 0; j <= this.width; j++)
            {
                table.rows[i].insertCell(-1);
                let cell = table.rows[i].cells[j];
                if (i == 0)
                {
                    if (j != 0)
                        cell.innerHTML = String(j);
                }
                else if (j == 0)
                {
                    cell.innerHTML = String(i);
                }
                else
                {
                    if (this.board[i - 1][j - 1])
                    {
                        cell.style.color = colors[this.board[i - 1][j - 1] - 1];
                        cell.innerHTML = "●";
                    }
                    else
                    {
                        cell.innerHTML = "　";
                    }

                }
            }
        }
    }
}