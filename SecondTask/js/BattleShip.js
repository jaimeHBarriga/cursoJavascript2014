/**
 * Created by admin on 7/16/2014.
 */

console.log('This is the Battle ship game .....');
var gameField = [];

var createGameField = function(size) {
    console.log('Creating a game field of : '+size);

    for(i=0; i<size; i++) {
        gameField[i] = [];
        for(j=0; j<size; j++) {
            gameField[i][j]=' X ';
        }
    }

    drawGameField();
    //drawDebbugGameField();
};

var drawGameField = function() {
    console.log('Drawing the game field .... ');
    for(i=0; i<gameField.length; i++) {
        console.log(gameField[i].join());
        console.log('\n');
    }
};

var drawDebbugGameField = function() {
    console.warn('Drawing the game field .... ');
    for(i=0; i<gameField.length; i++){
        console.warn(gameField[i].join());
        console.warn('\n');
    }
};

var addBattleShips = function(numberOfShips) {

};

