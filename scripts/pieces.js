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
        return this._name.substring(0,2); //takes the first letter of the string 'name'. one letter isn't enough if i spell knight right
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
console.log(Queen.position());

var Bishop = new Piece('black', 'Bishop', 'c8');
Bishop.queenside = true;
console.log(Bishop.name());
console.log(Bishop.color());
console.log(Bishop.position());
console.log(Bishop.queenside);


var Knight = new Piece('black', 'Knight', 'b8');
console.log(Knight.name());
console.log(Knight.color());
console.log(Knight.position());

var Rook = new Piece('white', 'Rook', 'a1');
console.log(Rook.name());
console.log(Rook.color());
console.log(Rook.position());

var Pawn = new Piece('white', 'Pawn', 'a2');
console.log(Pawn.name());
console.log(Pawn.color());
console.log(Pawn.position());

var Godzilla = new Piece('green', 'Dinosaur', 'd5');
console.log(Godzilla.name());
console.log(Godzilla.color());
console.log(Godzilla.position());
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
    assert(King.color() == "purple");
});

it("should test if Knight is green", function() {
    assert(Knight.color() == "green");
});

it("should test if Knight is black", function() {
    assert(Knight.color() == "black");
});

it('should test if Knight is in position b8', function() {
    assert(Knight.position() == "b8");
});
it("should test if the abbrev for knight is kn", function() {
    assert(Knight.abbrev == 'Kn');
});//why doesn't this one work?

it("should test if Rook is white", function() {
    assert(Rook.color() =="white");
});

it("should test if Rook is a rook", function() {
    assert(Rook.name() =="Rook");
});

it("should test if pawn is white", function() {
    assert(Pawn.color() =="white");
});

it("should test if Pawn is a pawn", function() {
    assert(Pawn.name() =="Pawn");
});

it("should test if Godzilla is green", function() {
    assert(Godzilla.color() == "green");
});



