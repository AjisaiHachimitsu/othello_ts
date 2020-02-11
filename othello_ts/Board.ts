export default class Board
{
    readonly height: number;
    readonly width: number;
    readonly ninzu: number;
    board: number[][];
    junban = 0;
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
                this.board[i][j] = -1;
            }
        }
        this.board[3][4] = 0;
        this.board[4][3] = 0;
        this.board[3][3] = 1;
        this.board[4][4] = 1;
    }

    Put(position: number[], junban: number): boolean
    {
        this.board[position[0]][position[1]] = junban;
        return true;
    }

    Draw(table: HTMLTableElement, colors: string[]): void
    {
        table.className = "board";
        table.onclick = function (event)
        {
            CellClick(event.target as HTMLTableCellElement);
        }
        for (let i = 0; i <= this.height; i++)
        {
            table.insertRow(-1);
            for (let j = 0; j <= this.width; j++)
            {
                table.rows[i].insertCell(-1);
                let cell = table.rows[i].cells[j];
                //cell.style.borderWidth = "medium";
                if (i == 0)
                {
                    cell.className = "head";
                    if (j != 0)
                        cell.innerHTML = String(j);
                }
                else if (j == 0)
                {
                    cell.className = "head"
                    cell.innerHTML = String(i);
                }
                else
                {
                    cell.className = "body";
                    if (this.board[i - 1][j - 1] != -1)
                    {
                        cell.style.color = colors[this.board[i - 1][j - 1]];
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

    Input(clickPos: number[]):number[]
    {
        let position = new Array<number>(2);
        position[0] = clickPos[0] - 1;
        position[1] = clickPos[1] - 1;
        return position;
    }
}


function CellClick(cell: HTMLTableCellElement): void
{
    let position: number[];
    position = new Array(2);
    position[0] = (cell.parentNode as HTMLTableRowElement).rowIndex;
    position[1] = cell.cellIndex;
    
}
