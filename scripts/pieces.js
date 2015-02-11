var assert = require('assert');

function pieceMaker() {
    //given color white or black
    //given name of piece
    //when
    //then
}

function Piece(color, name, position) {
    //attach properties here
    this._color = color;
    this._name = name;
    this._position = position;
}

Piece.prototype = {
    position: function() {
        return this._position; //return the position of the piece
    },
    color: function() {
        return this._color; //return the color of the piece
    },
    name: function() {
        return this._name; //returns the name of the piece
    },
    abbrev: function() {
        return name.substring(0,1); //takes the first letter of the string 'name'
    },
    toString: function() {
        return this._color + " " + this._name + " " + this._position; //returns the parameters of piece as a string
    },
    toHTML: function() {
        return
    },
    toUTF: function() {

    }
 };




var King = new Piece('black', 'King', 'e8');
console.log(King.name());
console.log(King.color());
console.log(King.position());

var Queen = new Piece('black', 'Queen', 'd8');
console.log(Queen.name());
console.log(Queen.color());







//function Rook(color, queenside) {
//    Piece.call(this, color, 'rook', position);
//}
//
//Rook.prototype = new Piece();

it("should have a piece", function() {
    assert(Piece);
});


it("should test if piece is a function", function() {
    assert(typeof Piece == "function");
});


it("should test if piece has a position", function() {
    assert(Piece.position == "e8");
});

it("should test if king has a color", function() {
   assert(King.color() == "color");
   });

it("should test if queen is a pawn", function() {
   assert(Queen.name() == "pawn");
   });

it("should test if queen is a queen", function() {
    assert(Queen.name() == "Queen");
});

it('should test if queen is in position d8', function() {
    assert(Queen.position() == "d8");
});

it("should test if king is black", function() {
    assert(King.color() == "black");
});

it("should test if king is purple", function() {
    assert(King.color == "purple");
});
//
//var Pawn = new Piece ('white', 'Pawn', 'C2');
//var Queen = new Piece ('white', 'Queen', 'D1' );
//var Knight = new Piece('white','Knight', 'E1');
//Knight.queenside = "true";




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
