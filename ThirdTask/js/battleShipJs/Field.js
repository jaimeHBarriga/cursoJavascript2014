/**
 * Created by Jaime on 7/29/2014.
 */

Field = function() {
    this.size = FIELD_SIZE;
    this.status = INITIAL_STATUS;
    var _field = [];
    this.ships = [];

    this.getField = function(){
        return _field;
    };

    this.setField = function(field){
        _field = field;
    };

    this.addShipToField = function(ship) {
        _field[ship.getPosition()] = ship.getId();
    };

    this.create();
    this.createShips();
    this.draw();
};


Field.prototype.generateRandomCoordinates = function(shipSize, shipDirection) {
    maxHorizontal = FIELD_SIZE;
    maxVertical = FIELD_SIZE;
    gameField = this.getField();

    if(shipDirection==0) {
        maxVertical = maxVertical - shipSize;
    } else {
        maxHorizontal = maxHorizontal - shipSize;
    }

    xPos = parseInt(Math.random()*(maxHorizontal));
    yPos = parseInt(Math.random()*(maxVertical));

    if(gameField[xPos][yPos].indexOf('s')==-1) {

    }

};

Field.prototype.create = function() {
    var gameField = [];

    for (i = 0; i < this.size; i++) {
        gameField[i] = [];
        for(j=0; j<this.size;j++) {
            gameField[i][j] = 'X'+i+j;
        }
    }
    this.setField(gameField);
};

Field.prototype.createShips= function() {
    for (i = 0; i < NUMBERS_OF_SHIPS; i++) {
        var newShip = new Ship(i);
        this.ships.push(newShip);
        //this.addShipToField(newShip);
    }
};

/*Field.prototype.draw = function() {
    console.log(this.getField().join('-'));
};*/

Field.prototype.draw = function() {
    gameField = this.getField();
    for(i=0; i<gameField.length; i++) {
        console.log(gameField[i].join('    '));
        console.log('\n');
    }
};
