import ArrayCalc from "./arrayCalc.js";
export default class Board {
    //junban = 0;
    constructor() {
        this.size = 8;
        //this.ninzu = 2;
        this.dimension = 2;
        this.board = new Array(Math.pow(this.size, this.dimension));
        for (let i = 0; i < this.board.length; i++) {
            this.board[i] = -1;
        }
        //this.board[3][4] = 0;
        //this.board[4][3] = 0;
        //this.board[3][3] = 1;
        //this.board[4][4] = 1;
        this.SetBoard([3, 4], 0);
        this.SetBoard([4, 3], 0);
        this.SetBoard([3, 3], 1);
        this.SetBoard([4, 4], 1);
        this.dirs = new Array((Math.pow(3, this.dimension) - 1) / 2);
        for (let i = 0; i < this.dirs.length; i++) {
            this.dirs[i] = [Math.floor(i / 3) - 1, i % 3 - 1];
        }
    }
    Put(position, junban) {
        if (this.Check(position, junban) == false)
            return false;
        this.Reverce(position, junban);
        //this.board[position[0]][position[1]] = junban;
        return true;
    }
    Check(position, junban) {
        if (this.GetBoard(position) != -1 || this.IsOutOfField(position)) {
            //alert("そこには置けません");
            return false;
        }
        for (let i of this.dirs) {
            if (this.CheckDir(position, junban, i))
                return true;
            if (this.CheckDir(position, junban, ArrayCalc.Scalar(-1, i)))
                return true;
        }
        return false;
    }
    CheckDir(position, junban, dir) {
        let a = ArrayCalc.Add(position, dir);
        //alert(a);
        if (this.IsOutOfField(a) || this.GetBoard(a) === -1 || this.GetBoard(a) === junban) {
            return false;
        }
        let count = 2;
        while (true) {
            let b = ArrayCalc.Add(position, ArrayCalc.Scalar(count, dir));
            if (this.IsOutOfField(b) || this.GetBoard(b) === -1)
                return false;
            if (this.GetBoard(b) === junban) {
                return true;
            }
            count++;
        }
    }
    Reverce(position, junban) {
        for (let i of this.dirs) {
            this.ReverceDir(position, junban, i);
            this.ReverceDir(position, junban, ArrayCalc.Scalar(-1, i));
        }
    }
    ReverceDir(position, junban, dir) {
        let a = ArrayCalc.Add(position, dir);
        //alert(a);
        if (this.IsOutOfField(a) || this.GetBoard(a) === -1 || this.GetBoard(a) === junban) {
            return;
        }
        let count = 2;
        while (true) {
            let b = ArrayCalc.Add(position, ArrayCalc.Scalar(count, dir));
            if (this.IsOutOfField(b) || this.GetBoard(b) === -1)
                return;
            if (this.GetBoard(b) === junban) {
                for (let j = 0; j < count; j++) {
                    this.SetBoard(ArrayCalc.Add(position, ArrayCalc.Scalar(j, dir)), junban);
                }
                return;
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
        if (this.dimension !== pos.length)
            return undefined;
        return this.board[this.ChangeIndexToNum(pos)];
    }
    SetBoard(pos, value) {
        this.board[this.ChangeIndexToNum(pos)] = value;
    }
    GetPutAbles(junban) {
        let putable = [];
        for (let i = 0; i < this.board.length; i++) {
            if (this.Check(this.ChangeIndexToArray(i), junban)) {
                putable.push(this.ChangeIndexToArray(i));
            }
        }
        //alert(putable.length);
        return putable;
    }
    ChangeIndexToNum(pos) {
        let sum = 0;
        for (let i = 0; i < pos.length; i++) {
            sum += pos[i] * Math.pow(this.size, i);
        }
        //alert (sum);
        return sum;
    }
    ChangeIndexToArray(index) {
        let pos = new Array(this.dimension);
        for (let i = 0; i < this.dimension; i++) {
            if (i < this.dimension - 1) {
                pos[i] = Math.floor(index / Math.pow(this.size, this.dimension - i - 1));
            }
            else {
                pos[i] = index % this.size;
            }
        }
        return pos;
    }
}
//# sourceMappingURL=Board.js.map