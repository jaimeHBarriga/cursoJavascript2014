/**
 * Created by Jaime on 7/29/2014.
 */

Player = function(name, nickName) {
    var _name = name;
    var _nickName = nickName;
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

    this.getField = function() {
        return _field;
    };

    this.setField = function(newField) {
        _field = newField;
    };
};

/**
 * This function instantiate the new field for the player.
 *
 * @author Jaime Barriga
 */
Player.prototype.createField = function(){
    this.setField(new Field());
};



