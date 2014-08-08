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
        shipIcon = ' S'+ship.getId();
        initXPos = ship.getXPosition();
        initYPos = ship.getYPosition();

        for(i=0; i<ship.getSize(); i++) {
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

Field.prototype.generateRandomPosition = function (maxSize) {
    return parseInt(Math.random()*(maxSize));
};

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

    this.xPos = this.generateRandomPosition(maxHorizontal);  //parseInt(Math.random()*(maxHorizontal));
    this.yPos = this.generateRandomPosition(maxVertical);//parseInt(Math.random()*(maxVertical));

    var gameCell = gameField[this.xPos][this.yPos].trim();
    while(gameCell.localeCompare('-')!=0 && gameCell.localeCompare('S')==1) {
        //The position is busy, we need to generate a new position
        this.xPos = this.generateRandomPosition(maxHorizontal);//parseInt(Math.random()*(maxHorizontal));
        this.yPos = this.generateRandomPosition(maxVertical);//parseInt(Math.random()*(maxVertical));

        gameCell = gameField[xPos][yPos].trim();
    };

    ship.setXPosition(this.xPos);
    ship.setYPosition(this.yPos);
};

Field.prototype.create = function() {
    var gameField = [];

    for (i = 0; i < this.size; i++) {
        gameField[i] = [];
        for(j=0; j<this.size;j++) {
            gameField[i][j] = ' - ';
        }
    }
    this.setField(gameField);
};

Field.prototype.createShips= function() {
    for (z= 0; z < NUMBERS_OF_SHIPS; z++) {
        console.log('Creating the ship nro : '+z);
        var newShip = new Ship(z);
        this.generateRandomCoordinates(newShip);
        this.ships.push(newShip);
        this.addShipToField(newShip);
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
