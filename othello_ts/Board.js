var Board = /** @class */ (function () {
    function Board() {
        this.height = 8;
        this.width = 8;
        this.board = new Array(this.height);
        document.writeln(String(this.board.length));
        for (var _i = 0, _a = this.board; _i < _a.length; _i++) {
            var item = _a[_i];
            item = new Array(this.width);
            document.writeln(String(item.length));
        }
    }
    return Board;
}());
var board2 = new Board();
//# sourceMappingURL=Board.js.map