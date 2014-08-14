/**
 * Created by Jaime on 7/29/2014.
 */

Player = function(name, nickName) {
    var _name = name;
    var _nickName = nickName;
    var _score = 0;
    var _field = null;

    this.getName = function() {
        return _name;
    };
    this.setName = function(newName) {
        _name = newName;
    };

    this.getNickName = function() {
        return _nickName;
    };
    this.setNickName = function(newNickName) {
        _nickName = newNickName;
    };

    this.getScore = function() {
        return _score;
    };

    this.setScore = function(newScore) {
        _score = newScore;
    };

    this.getField = function() {
        return _field;
    };

    this.setField = function(newField) {
        _field = newField;
    };
};

Player.prototype.createField = function(){
    this.setField(new Field());
};



