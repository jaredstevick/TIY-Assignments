var board = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'] ];

console.log(board.join('\n') + '\n\n');

// Move King's Pawn forward 2
//board[4][4] = board[6][4];
//board[6][4] = ' ';
//console.log(board.join('\n'));

// move rook's pawn forward one
//board[2][0] = board[1][0];
//board[1][0] = ' ';
//console.log(board.join('\n'));
// wooohoo it worked!

// attempting to move the knight
//board[5][0] = board[7][1];
//board[7][1] = ' ';
//console.log(board.join('\n'));
// success!!

//to print the board
var printBoard = function() {
    console.log(board.join('\n'));
}


//let's move some pieces
var movePiece = function (fromX, fromY, toX, toY) {
// to make it match our board numbers and avoid confusion, subtract one(since arrays start at 0)
    fromX = fromX - 1;
    fromY = fromY - 1;
    toX = toX - 1;
    toY = toY - 1;
//the actual movement of the piece
    board[toY][toX] = board[fromY][fromX];
    board[fromY][fromX] = ' ';
//don't forget to redraw the board
    printBoard();
};

//testing testing
//movePiece(4, 6, 4, 5);
//sweet, it works
//movePiece(3, 7, 3, 6);
