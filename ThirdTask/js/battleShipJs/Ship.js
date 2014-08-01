/**
 * Created by Jaime on 7/29/2014.
 */

var Ship = function(id) {
    var _id = id;
    var _position = null;
    var _direction = null; //0=Horizontal , 1=Vertical
    var _size = null;
    this.status = ALIVE;


    this.getId = function(){
        return _id;
    };

    this.getPosition = function(){
        return _position;
    };
    this.setPosition = function(newPosition){
        _position = newPosition;
    };

    this.getDiretion = function() {
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

    this.create();
};

Ship.prototype.create = function(){
    this.setSize(parseInt(Math.random() * MAX_SHIP_SIZE)+1);
    this.setPosition(parseInt(Math.random() * FIELD_SIZE - this.size));
    this.setDirection(parseInt(Math.random()*2));
};

