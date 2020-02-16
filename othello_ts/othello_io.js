export default class OthelloIo {
    constructor(board0, table0, colors0) {
        this.board = board0;
        this.table = table0;
        this.colors = colors0;
        this.table.className = "board";
        for (let i = 0; i <= this.board.size; i++) {
            this.table.insertRow(-1);
            for (let j = 0; j <= this.board.size; j++) {
                this.table.rows[i].insertCell(-1);
            }
        }
    }
    Output() {
        for (let i = 0; i <= this.board.size; i++) {
            for (let j = 0; j <= this.board.size; j++) {
                let cell = this.table.rows[i].cells[j];
                //cell.style.borderWidth = "medium";
                if (i == 0) {
                    cell.className = "head";
                    if (j != 0)
                        cell.innerHTML = String(j);
                }
                else if (j == 0) {
                    cell.className = "head";
                    cell.innerHTML = String(i);
                }
                else {
                    cell.className = "body";
                    if (this.board.GetBoard([i - 1, j - 1]) != -1) {
                        cell.style.color = this.colors[this.board.GetBoard([i - 1, j - 1])];
                        cell.innerHTML = "●";
                    }
                    else {
                        cell.innerHTML = "　";
                    }
                }
            }
        }
    }
    Input() {
        this.table.onclick = function (event) {
            CellClick(event.target);
        };
        //while (true)
        {
        }
    }
}
function CellClick(cell) {
    let position;
    position = new Array(2);
    position[0] = cell.parentNode.rowIndex;
    position[1] = cell.cellIndex;
    return true;
}
//# sourceMappingURL=othello_io.js.map