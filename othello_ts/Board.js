var Board = /** @class */ (function () {
    function Board() {
        this.height = 8;
        this.width = 8;
        this.board = new Array(this.height * this.width);
        document.writeln(String(this.board.length));
    }
    return Board;
}());
document.writeln("ababa");
var board = new Board();
//# sourceMappingURL=Board.js.map