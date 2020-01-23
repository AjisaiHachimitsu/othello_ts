class Board
{
    readonly height:number;
    readonly width: number;
    board: number[][];
    constructor()
    {
        this.height = 8;
        this.width = 8;
        this.board = new Array(this.height);
        for (let i = 0; i < this.board.length;i++)
        {
            this.board[i] = new Array(this.width);
            for (let j = 0; j < this.board[i].length;j++)
            {
                this.board[i][j] = 0;
            }
        }
    }
    Draw(table:HTMLTableElement)
    {
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
                    cell.innerHTML = String(this.board[i-1][j-1]);
                }
            }
        }
    }
}
let board2 = new Board();
let Table:HTMLTableElement = document.getElementById("table")as HTMLTableElement ;
board2.Draw(Table);