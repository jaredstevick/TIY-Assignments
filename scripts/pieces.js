var assert = require('assert');

function pieceMaker() {
    //given color white or black
    //given name of piece
    //when
    //then
}

function Piece(color, name, position) {
    //attach properties here
    this.color = color;
    this.name = name;
    this.position = position;
}

Piece.prototype = {
    position: function() {
        return this.position; //return the position of the piece
    },
    color: function() {
        return this.color; //return the color of the piece
    },
    name: function() {
        return this.name; //returns the name of the piece
    },
    abbrev: function() {
        return name.substring(0,1); //takes the first letter of the string 'name'
    },
    toString: function() {
        return this.color + " " + this.name + " " + this.position; //returns the parameters of piece as a string
    }
 };

//function Rook(color, queenside) {
//    Piece.call(this, color, 'rook', position);
//}
//
//Rook.prototype = new Piece();

it("should have a function called piece", function() {
    assert(Piece);
});


it("should test if piece is a function", function() {
    assert(typeof Piece == "object");
});





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
