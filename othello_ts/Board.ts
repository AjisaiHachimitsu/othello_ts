import ArrayCalc from "./arrayCalc.js";
export default class Board
{
    readonly size: number;
    //readonly ninzu: number;
    readonly dimension: number;
    private board: number[];
    //junban = 0;
    constructor()
    {
        this.size = 4;
        //this.ninzu = 2;
        this.dimension = 2;
        this.board = new Array(Math.pow( this.size,this.dimension));
        for (let i = 0; i < this.board.length; i++)
        {
                this.board[i]= -1;
            
        }
        //this.board[3][4] = 0;
        //this.board[4][3] = 0;
        //this.board[3][3] = 1;
        //this.board[4][4] = 1;
        this.SetBoard([1, 2], 0);
        this.SetBoard([2, 1], 0);
        this.SetBoard([1, 1], 1);
        this.SetBoard([2, 2], 1);

        this.dirs = new Array<number[]>((Math.pow(3 , this.dimension) - 1) / 2)
        for (let i = 0; i < this.dirs.length;i++)
        {
            this.dirs[i] = [Math.floor( i / 3) - 1, i % 3 - 1];
        }
    }

    Put(position: number[], junban: number): boolean
    {
        if (this.Check(position,junban) == false)
            return false;
        this.Reverce(position, junban);
        //this.board[position[0]][position[1]] = junban;
        return true;
    }
    readonly dirs: number[][];

    private Check(position: number[], junban: number): boolean
    {
        if (this.GetBoard(position) != -1 || this.IsOutOfField(position))
        {
            //alert("そこには置けません");
            return false;
        }
        for (let i of this.dirs)
        {
            if (this.CheckDir(position, junban, i))
                return  true;
            if (this.CheckDir(position, junban, ArrayCalc.Scalar(-1, i)))
                return true;
        }
        return false;
    }
    private CheckDir(position: number[], junban: number, dir: number[]): boolean
    {
        let a = ArrayCalc.Add(position, dir)
        //alert(a);
        if (this.IsOutOfField(a) || this.GetBoard(a) === -1 || this.GetBoard(a) === junban)
        {
            return false;
        }
        let count = 2;
        while (true)
        {
            let b = ArrayCalc.Add(position, ArrayCalc.Scalar(count, dir))
            if (this.IsOutOfField(b) || this.GetBoard(b) === -1)
                return false;
            if (this.GetBoard(b) === junban)
            {
                return true;
            }
            count++;
        }
    }
    private Reverce(position:number[],junban:number):void
    {
        for (let i of this.dirs)
        {
            this.ReverceDir(position, junban, i)
            this.ReverceDir(position, junban, ArrayCalc.Scalar(-1, i))
        }
    }
    private ReverceDir(position: number[], junban: number, dir: number[]):void
    {
        let a = ArrayCalc.Add(position, dir)
        //alert(a);
        if (this.IsOutOfField(a) || this.GetBoard(a) === -1 || this.GetBoard(a) === junban)
        {
            return ;
        }
        let count = 2;
        while (true)
        {
            let b = ArrayCalc.Add(position, ArrayCalc.Scalar(count, dir))
            if (this.IsOutOfField(b)||this.GetBoard(b)===-1)
                return;
            if (this.GetBoard(b) === junban)
            {
                for (let j = 0; j < count; j++)
                {
                    this.SetBoard(ArrayCalc.Add(position, ArrayCalc.Scalar(j, dir)), junban);
                }
                return ;
            }
            count++;
        }
    }
    private IsOutOfField(position: number[]): boolean
    {
        for (let i of position)
        {
            if (i < 0 || i >= this.size)
            {
                 return true;
            }
        }
        return false;
    }

    GetBoard(pos: number[]):number
    {
        if (this.IsOutOfField(pos))
            return undefined;
        if (this.dimension !== pos.length)
            return undefined;

        return this.board[this.ChangeIndexToNum(pos)];
    }
    private SetBoard(pos: number[], value: number)
    {
        this.board[this.ChangeIndexToNum(pos)] = value;
    }

    GetPutAbles(junban: number): number[][]
    {
        let putable:number[][] = [];
        for (let i = 0; i < this.board.length; i++)
        {
            if (this.Check(this.ChangeIndexToArray(i), junban))
            {
                putable.push(this.ChangeIndexToArray(i))
            }
        }
        //alert(putable.length);
        return putable;
    }
    private ChangeIndexToNum(pos: number[]): number
    {
        let sum = 0;
        for (let i = 0; i < pos.length; i++)
        {
            sum += pos[i] * Math.pow(this.size, i);
        }
        //alert (sum);
        return sum;
    }

    private ChangeIndexToArray(index: number): number[]
    {
        let pos = new Array<number>(this.dimension);
        for (let i = 0; i < this.dimension; i++)
        {
            if (i < this.dimension - 1)
            {
                pos[i] = Math.floor(index / Math.pow(this.size, this.dimension - i - 1))
            }
            else
            {
                pos[i] = index % this.size;
            }
        }
        return pos;
    }

}



