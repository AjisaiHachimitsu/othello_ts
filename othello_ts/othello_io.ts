import Board from "./Board.js"

export function Output(board: Board, table: HTMLTableElement,colors:string[]): void
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
                if (board.GetBoard([i - 1,j - 1]) != -1)
                {
                    cell.style.color = colors[board.GetBoard([i - 1, j - 1])];
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


function CellClick(cell: HTMLTableCellElement): void
{
    let position: number[];
    position = new Array(2);
    position[0] = (cell.parentNode as HTMLTableRowElement).rowIndex;
    position[1] = cell.cellIndex;

}
