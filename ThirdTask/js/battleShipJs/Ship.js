/**
 * Created by Jaime on 7/29/2014.
 */

var Ship = function(id) {
    var _id = id;
    var _initXpos = null;
    var _initYpos = null;
    var _direction = null; //0=Horizontal , 1=Vertical
    var _size = null;
    var _status = ALIVE;

    this.getId = function(){
        return _id;
    };

    this.getXPosition = function(){
        return _initXpos;
    };

    this.setXPosition = function(newPosition){
        _initXpos = newPosition;
    };

    this.getYPosition = function(){
        return _initYpos;
    };

    this.setYPosition = function(newPosition){
        _initYpos = newPosition;
    };

    this.getDirection = function() {
        return _direction;
    };

    this.setDirection = function(newDirection) {
        _direction = newDirection;
    };

    this.getSize = function(){
        return _size;
    };

    this.setSize = function(newSize) {
        _size = newSize;
    };

    this.getStatus = function() {
        return _status;
    };

    this.setStatus = function(newStatus) {
        _status = newStatus;
    };

    this.create();
};

/**
 * This function generates randomly the ship size and direction.
 * The ship size varies between 1 to 3.
 * The ship direction varies between 0=Horizontal , 1=Vertical.
 *
 * @author Jaime Barriga
 */
Ship.prototype.create = function(){
    this.setSize(parseInt(Math.random() * MAX_SHIP_SIZE)+1);
    this.setDirection(parseInt(Math.random()*2));
};

