import ArrayCalc from "./arrayCalc.js";
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
        this.dirs = new Array((Math.pow(3, this.dimension) - 1) / 2);
        for (let i = 0; i < this.dirs.length; i++) {
            this.dirs[i] = [Math.floor(i / 3) - 1, i % 3 - 1];
        }
    }
    Put(position, junban) {
        if (this.Reverce(position, junban) == false)
            return false;
        //this.board[position[0]][position[1]] = junban;
        return true;
    }
    Reverce(position, junban) {
        if (this.GetBoard(position) != -1 || this.IsOutOfField(position)) {
            alert("そこには置けません");
            return false;
        }
        let isPutAble = false;
        for (let i of this.dirs) {
            if (this.ReverceDir(position, junban, i))
                isPutAble = true;
            if (this.ReverceDir(position, junban, ArrayCalc.Scalar(-1, i)))
                isPutAble = true;
        }
        return isPutAble;
    }
    ReverceDir(position, junban, dir) {
        let a = ArrayCalc.Add(position, dir);
        //alert(a);
        if (this.IsOutOfField(a) || this.GetBoard(a) === -1 || this.GetBoard(a) === junban) {
            return false;
        }
        let count = 2;
        while (true) {
            let b = ArrayCalc.Add(position, ArrayCalc.Scalar(count, dir));
            if (this.IsOutOfField(b))
                return false;
            if (this.GetBoard(b) == junban) {
                for (let j = 0; j < count; j++) {
                    this.SetBoard(ArrayCalc.Add(position, ArrayCalc.Scalar(j, dir)), junban);
                }
                return true;
            }
            count++;
        }
    }
    IsOutOfField(position) {
        for (let i of position) {
            if (i < 0 || i >= this.size) {
                return true;
            }
        }
        return false;
    }
    GetBoard(pos) {
        if (this.IsOutOfField(pos))
            return undefined;
        return this.board[pos[0]][pos[1]];
    }
    SetBoard(pos, value) {
        this.board[pos[0]][pos[1]] = value;
    }
}
//# sourceMappingURL=Board.js.map