import ArrayCalc from "./arrayCalc.js";
export default class Board
{
    readonly size: number;
    //readonly ninzu: number;
    readonly dimension: number;
    private board: number[][];
    //junban = 0;
    constructor()
    {
        this.size = 8;
        //this.ninzu = 2;
        this.dimension = 2;
        this.board = new Array(this.size);
        for (let i = 0; i < this.board.length; i++)
        {
            this.board[i] = new Array(this.size);
            for (let j = 0; j < this.board[i].length; j++)
            {
                this.board[i][j] = -1;
            }
        }
        this.board[3][4] = 0;
        this.board[4][3] = 0;
        this.board[3][3] = 1;
        this.board[4][4] = 1;

        this.dirs = new Array<number[]>((Math.pow(3 , this.dimension) - 1) / 2)
        for (let i = 0; i < this.dirs.length;i++)
        {
            this.dirs[i] = [Math.floor( i / 3) - 1, i % 3 - 1];
        }
    }

    Put(position: number[], junban: number): boolean
    {
        if (this.Reverce(position,junban) == false)
            return false;
        //this.board[position[0]][position[1]] = junban;
        return true;
    }
    readonly dirs: number[][];
    private Reverce(position:number[],junban:number): boolean
    {
        if (this.GetBoard(position) != -1||this.IsOutOfField(position))
            return false;
        let isPutAble = false;
        for (let i of this.dirs)
        {
            if (this.ReverceDir(position, junban, i))
                isPutAble = true;
            if (this.ReverceDir(position, junban, ArrayCalc.Scalar(-1, i)))
                isPutAble=true
        }
        return isPutAble;
    }
    private ReverceDir(position: number[], junban: number, dir: number[]):boolean
    {
        let a = ArrayCalc.Add(position, dir)
        if (this.GetBoard(a) === -1 || this.GetBoard(a) === junban || this.IsOutOfField(a))
            return false;
        let count = 2;
        while (true)
        {
            let b = ArrayCalc.Add(position, ArrayCalc.Scalar(count, dir))
            if (this.IsOutOfField(b))
                return false;
            if (this.GetBoard(b) == junban)
            {
                for (let j = 0; j < count; j++)
                {
                    this.SetBoard(ArrayCalc.Add(position, ArrayCalc.Scalar(j, dir)), junban);
                }
                return true;
            }
            count++;
        }
    }
    private IsOutOfField(position: number[]): boolean
    {
        for (let i of position)
        {
            if (i < 0 || i >= this.size)
                alert("枠外には置けません");
                return true;
        }
        return false;
    }

    GetBoard(pos: number[]):number
    {
        return this.board[pos[0]][pos[1]];
    }
    private SetBoard(pos: number[], value: number)
    {
        this.board[pos[0]][pos[1]] = value;
    }
}


