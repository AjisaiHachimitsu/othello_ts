class Board
{
    height: number;
    width: number;
    board: number[];
    constructor()
    {
        this.height = 8;
        this.width = 8;
        this.board = new Array(this.height * this.width);
        document.writeln(String(this.board.length));
    }
}
let board = new Board();
