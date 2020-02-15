export default class Board {
    //junban = 0;
    constructor() {
        this.size = 8;
        //this.ninzu = 2;
        this.dimension = 2;
        this.board = new Array(this.size);
        for (let i = 0; i < this.board.length; i++) {
            this.board[i] = new Array(this.size);
            for (let j = 0; j < this.board[i].length; j++) {
                this.board[i][j] = -1;
            }
        }
        this.board[3][4] = 0;
        this.board[4][3] = 0;
        this.board[3][3] = 1;
        this.board[4][4] = 1;
    }
    Put(position, junban) {
        this.board[position[0]][position[1]] = junban;
        return true;
    }
    /*Draw(table: HTMLTableElement, colors: string[]): void
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

    }*/
    Input(clickPos) {
        let position = new Array(2);
        position[0] = clickPos[0] - 1;
        position[1] = clickPos[1] - 1;
        return position;
    }
    GetBoard(pos) {
        return this.board[pos[0]][pos[1]];
    }
}
//# sourceMappingURL=Board.js.map