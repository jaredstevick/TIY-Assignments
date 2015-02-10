alert("hello");
var assert = chai.assert;

function pieceMaker {
    //given color white or black
    //given name of piece
    //when
    //then
}

function Piece(color, name, position){
    //attach properties here
    this.color = color;
    this.name name;
    this.position = position;
}

Piece.prototype = {
    //attach methods here
    getName: function() {
        return this.name;
    getFullName = {
        return this.color + " " + this.name;
    }
    }
 };

function Rook(color, queenside) {
    Piece.call(this, color, 'rook', position);
}

Rook.prototype = new Piece();








//content goes here
/**
 * @constructor Piece
 * @param String color of Piece: "white" or "black"
 * @param String name of Piece, e.g. "queen", "rook", "knight"
 * @param String position of Piece, e.g. "a7", "d8"
 *
 * @method position
 * @returns String current position, e.g. "a8", "f3"
 *
 * @method color
 * @returns String color of Piece: "white" or "black"
 *
 * @method name
 * @returns String name of Piece, e.g. "queen", "rook", "knight"
 *
 * @method abbrev
 * @returns String abbreviation of Piece, e.g. "white queen" == 'q'
 *
 * @method toString()
 * @return String for printing / debugging, e.g. "black queen d8"
 *
 * @method toHTML()
 * @return String HTML entity, e.g. "black knight" == "&#x265e"
 *
 * @method toUTF8()
 * @return String UTF8 character, e.g. "black knight" == "\u265e"
 */
//function Piece(color, name, position){
  // Constructor
//}
//
//Piece.prototype = {
//}
// END Piece.prototype
