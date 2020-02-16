function start(table, size, func) {
    table.className = "board";
    table.onclick = function (event) {
        TableClick(event.target, func);
    };
    for (let i = 0; i <= size; i++) {
        table.insertRow(-1);
        for (let j = 0; j <= size; j++) {
            table.rows[i].insertCell(-1);
        }
    }
}
function Output(board, table, colors) {
    for (let i = 0; i <= board.size; i++) {
        for (let j = 0; j <= board.size; j++) {
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
                    //cell.innerHTML = "　";
                }
            }
        }
    }
}
function TableClick(cell, func) {
    //(cell.parentElement.parentElement as HTMLTableElement).onclick = null;
    let clickPos;
    clickPos = new Array(2);
    clickPos[0] = cell.parentNode.rowIndex;
    clickPos[1] = cell.cellIndex;
    let position = new Array(2);
    position[0] = clickPos[0] - 1;
    position[1] = clickPos[1] - 1;
    func(position);
}
export default { start, Output };
//# sourceMappingURL=othello_io.js.map