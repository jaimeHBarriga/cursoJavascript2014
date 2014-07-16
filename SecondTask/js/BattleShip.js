/**
 * Created by admin on 7/16/2014.
 */

console.log('This is the Battle ship game .....');
var gameField = [];

var createGameField = function(size) {
    //gameField = [['X1','X2','X3'],['Y1','Y2','Y3'],['Z1','Z2','Z3']];

    for(i=0; i<size; i++) {
        for(j=0; j<size; j++) {
            gameField[i][j]=' X ';
        }
    }

    drawGameField();
    drawDebbugGameField();
};

var drawGameField = function() {
    console.log('Drawing the game field .... ');
    for(i=0; i<gameField.length; i++) {
        console.log(gameField[i].join());
    }
};

var drawDebbugGameField = function() {
    console.warn('Drawing the game field .... ');
    for(i=0; i<gameField.length; i++){
        console.warn(gameField[i].join());
    }
};

