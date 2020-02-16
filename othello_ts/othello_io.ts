import Board from "./Board.js"
export default class OthelloIo
{
    readonly table: HTMLTableElement;
    readonly board: Board;
    readonly colors: string[];
    constructor(board0: Board, table0: HTMLTableElement, colors0: string[])
    {
        this.board = board0;
        this.table = table0;
        this.colors = colors0;

        this.table.className = "board";
        for (let i = 0; i <= this.board.size; i++)
        {
            this.table.insertRow(-1);
            for (let j = 0; j <= this.board.size; j++)
            {
                this.table.rows[i].insertCell(-1);
            }
        }

    }
    Output(): void
    {
        for (let i = 0; i <= this.board.size; i++)
        {
            for (let j = 0; j <= this.board.size; j++)
            {
                let cell = this.table.rows[i].cells[j];
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
                    if (this.board.GetBoard([i - 1, j - 1]) != -1)
                    {
                        cell.style.color = this.colors[this.board.GetBoard([i - 1, j - 1])];
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
    Input()
    {
        this.table.onclick = function (event)
        {
            CellClick(event.target as HTMLTableCellElement);
        }
        //while (true)
        {
            
        }
    }
}


function CellClick(cell: HTMLTableCellElement): boolean
{
    let position: number[];
    position = new Array(2);
    position[0] = (cell.parentNode as HTMLTableRowElement).rowIndex;
    position[1] = cell.cellIndex;
    return true;
}
