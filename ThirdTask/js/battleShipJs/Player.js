/**
 * Created by Jaime on 7/29/2014.
 */

Player = function(name, nickName, lastName) {
    var _name = name;
    var _nickName = nickName;
    this.lastName = lastName;
    var _score = 0;
    this.field = null;
};

Player.prototype.createField = function(){
    this.field = new Field();
};

Player.prototype.getField = function() {
    return this.field;
};

Player.prototype.getScore = function() {
    return _score;
};

Player.prototype.setScore = function(newScore) {
     _score = newScore;
};

Player.prototype.getNickName = function() {
    return _nickName;
};

Player.prototype.getName = function() {
    return _name;
};