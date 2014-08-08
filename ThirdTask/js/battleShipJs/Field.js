/**
 * Created by Jaime on 7/29/2014.
 */

Field = function() {
    this.size = FIELD_SIZE;
    this.ships = [];
    var _status = INITIAL_STATUS;
    var _field = [];

    /**
     * This method returns the field instance.
     * @returns {Array}
     */
    this.getField = function(){
        return _field;
    };

    /**
     * This method replaces the current instance.
     * @param field
     */
    this.setField = function(field){
        _field = field;
    };

    /**
     * This method returns the current status field
     * @returns {_status|*}
     */
    this.getFieldStatus = function() {
        return _status;
    };

    /**
     * This method updates the field status.
     * @param newFieldStatus
     */
    this.setFieldStatus = function(newFieldStatus) {
        _status = newFieldStatus;
    };

    /**
     * This method adds the ship icons to the field matrix.
     * @param ship
     */
    this.addShipToField = function(ship) {
        var shipIcon = ' S'+ship.getId();
        var initXPos = ship.getXPosition();
        var initYPos = ship.getYPosition();

        for(var i=0; i<ship.getSize(); i++) {
            if(ship.getDirection() == 0) {
                _field[initXPos][initYPos+i] = shipIcon;
            } else {
                _field[initXPos+i][initYPos] = shipIcon;
            }
        }
    };

    this.create();
    this.createShips();
    this.draw();
};

/**
 * This function generates randomly a position in the field.
 *
 * @author Jaime Barriga
 * @param maxSize
 * @returns {Number}
 */
Field.prototype.generateRandomPosition = function (maxSize) {
    return parseInt(Math.random()*(maxSize));
};

/**
 * This function calculates valid positions for the ships taking into account the max field size and if there is already a ship in that position.
 *
 * @author Jaime Barriga
 * @param ship
 */
Field.prototype.generateRandomCoordinates = function(ship) {
    var maxHorizontal = 0;
    var maxVertical = 0;
    var gameField = this.getField();
    var shipDirection = ship.getDirection();
    var shipSize = ship.getSize();

    if(shipDirection==0) {
        maxVertical = FIELD_SIZE - shipSize;
    } else {
        maxHorizontal = FIELD_SIZE - shipSize;
    }

    var xPos = this.generateRandomPosition(maxHorizontal);
    var yPos = this.generateRandomPosition(maxVertical);

    var gameCell = gameField[xPos][yPos].trim();
    while(gameCell.localeCompare('-')!=0 && gameCell.localeCompare('S')==1) {
        //The position is busy, we need to generate a new position
        xPos = this.generateRandomPosition(maxHorizontal);//parseInt(Math.random()*(maxHorizontal));
        yPos = this.generateRandomPosition(maxVertical);//parseInt(Math.random()*(maxVertical));

        gameCell = gameField[xPos][yPos].trim();
    };

    ship.setXPosition(xPos);
    ship.setYPosition(yPos);
};

/**
 * This function creates an empty field.
 *
 * @author Jaime Barriga
 */
Field.prototype.create = function() {
    var gameField = [];

    for (var i = 0; i < this.size; i++) {
        gameField[i] = [];
        for(var j=0; j<this.size;j++) {
            gameField[i][j] = ' - ';
        }
    }
    this.setField(gameField);
};

/**
 * This function creates the ships and adds the ships to the field.
 *
 * @author Jaime Barriga.
 */
Field.prototype.createShips= function() {
    for (var i= 0; i < NUMBERS_OF_SHIPS; i++) {
        var newShip = new Ship(i);
        this.generateRandomCoordinates(newShip);
        this.ships.push(newShip);
        this.addShipToField(newShip);
    }
};

/**
 * This function draws the field array in the console log.
 *
 * @author Jaime Barriga
 */
Field.prototype.draw = function() {
    var gameField = this.getField();
    for(var i=0; i<gameField.length; i++) {
        console.log(gameField[i].join('    '));
        console.log('\n');
    }
};

Field.prototype.shoot = function(xPos, yPos) {
    var gameField = this.getField();
    gameField[xPos][yPos]= " X ";
    this.setField(gameField);
    this.draw();
};