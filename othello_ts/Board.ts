class Board
{
    height:number;
    width: number;
    board: number[][];
    constructor()
    {
        this.height = 8;
        this.width = 8;
        this.board = new Array(this.height);
        document.writeln(String(this.board.length));
        for (let i of this.board)
        {
            i = new Array(this.width);
            for (let j of i)
            {
                j = 0;
            }
            //document.writeln(String(i.length));
        }
    }
    Draw()
    {

    }
}
let board2 = new Board();
