export function Output(board, table, colors) {
    table.className = "board";
    table.onclick = function (event) {
        CellClick(event.target);
    };
    for (let i = 0; i <= this.height; i++) {
        table.insertRow(-1);
        for (let j = 0; j <= this.width; j++) {
            table.rows[i].insertCell(-1);
            let cell = table.rows[i].cells[j];
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
                if (board.GetBoard([i - 1, j - 1]) != -1) {
                    cell.style.color = colors[board.GetBoard([i - 1, j - 1])];
                    cell.innerHTML = "●";
                }
                else {
                    cell.innerHTML = "　";
                }
            }
        }
    }
}
function CellClick(cell) {
    let position;
    position = new Array(2);
    position[0] = cell.parentNode.rowIndex;
    position[1] = cell.cellIndex;
}
//# sourceMappingURL=othello_io.js.map