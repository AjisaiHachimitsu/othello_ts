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
    }

    Put(position: number[], junban: number): boolean
    {
        this.board[position[0]][position[1]] = junban;
        return true;
    }

    

    Input(clickPos: number[]):number[]
    {
        let position = new Array<number>(2);
        position[0] = clickPos[0] - 1;
        position[1] = clickPos[1] - 1;
        return position;
    }

    GetBoard(pos: number[]):number
    {
        return this.board[pos[0]][pos[1]];
    }
}


