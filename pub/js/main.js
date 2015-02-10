
// $(function() {
//     init();
//     console.log("Main Init Called");

// });

// function init() {
//     console.log("init() called");
// }
//
//
//function newBoard(board) {
//   var container = document.getElementById('container');
//   container.className = "container";
//    var chessboard = document.createElement('table');
//   chessboard.className = "chessboard";
//
//     _.forEach(board, function(row, key){
//         var tr = document.createElement('tr');
//         _.forEach(row, function(square, k){
//             var td = document.createElement('td');
//             td.innerHTML = square;
//             tr.appendChild(td);
//        });
//         
//    chessboard.appendChild(tr);
//    });
//
//var current = container.childNodes[0];
//container.replaceChild(chessboard, current);
//}
//
//
//var board = {};
//board.a = {
//    'one': '<span class="piece black rook">&#9820;</span>',
//    'two': '<span class="piece black knight">&#9822;</span>',
//    'three': '<span class="piece black bishop">&#9821;</span>',
//    'four': '<span class="piece black queen">&#9819;</span>',
//    'five': '<span class="piece black king">&#9818;</span>',
//    'six': '<span class="piece black bishop">&#9821;</span>',
//    'seven': '<span class="piece black knight">&#9822;</span>',
//    'eight': '<span class="piece black rook">&#9820;</span>'
//};
//board.b = {
//    'one': '<span class="piece black pawn">&#9823;</span>',
//    'two': '<span class="piece black pawn">&#9823;</span>',
//    'three': '<span class="piece black pawn">&#9823;</span>',
//    'four': '<span class="piece black pawn">&#9823;</span>',
//    'five': '<span class="piece black pawn">&#9823;</span>',
//    'six': '<span class="piece black pawn">&#9823;</span>',
//    'seven': '<span class="piece black pawn">&#9823;</span>',
//    'eight': '<span class="piece black pawn">&#9823;</span>'
//};
//board.c = {
//    'one': '',
//    'two': '',
//    'three': '',
//    'four': '',
//    'five': '',
//    'six': '',
//    'seven': '',
//    'eight': ''
//};
//board.d = {
//    'one': '',
//    'two': '',
//    'three': '',
//    'four': '',
//    'five': '',
//    'six': '',
//    'seven': '',
//    'eight': ''
//};
//board.e = {
//    'one': '',
//    'two': '',
//    'three': '',
//    'four': '',
//    'five': '',
//    'six': '',
//    'seven': '',
//    'eight': ''
//};
//board.f = {
//    'one': '',
//    'two': '',
//    'three': '',
//    'four': '',
//    'five': '',
//    'six': '',
//    'seven': '',
//    'eight': ''
//};
//board.g = {
//    'one': '<span class="piece white pawn">&#9823;</span>',
//    'two': '<span class="piece white pawn">&#9823;</span>',
//    'three': '<span class="piece white pawn">&#9823;</span>',
//    'four': '<span class="piece white pawn">&#9823;</span>',
//    'five': '<span class="piece white pawn">&#9823;</span>',
//    'six': '<span class="piece white pawn">&#9823;</span>',
//    'seven': '<span class="piece white pawn">&#9823;</span>',
//    'eight': '<span class="piece white pawn">&#9823;</span>'
//};
//board.h = {
//    'one': '<span class="piece white rook">&#9820;</span>',
//    'two': '<span class="piece white knight">&#9822;</span>',
//    'three': '<span class="piece white bishop">&#9821;</span>',
//    'four': '<span class="piece white queen">&#9819;</span>',
//    'five': '<span class="piece white king">&#9818;</span>',
//    'six': '<span class="piece white bishop">&#9821;</span>',
//    'seven': '<span class="piece white knight">&#9822;</span>',
//    'eight': '<span class="piece white rook">&#9820;</span>'
//};
//
//
////board.c.three = board.a.one;
////board.a.one = '';
//
//newBoard(board);
//
//
//var moveMe = function (container) {
//    board.c.three = board.a.one;
//    board.a.one = '';
//    newBoard(board);
//};
