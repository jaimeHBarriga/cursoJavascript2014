/**
 * Created by Jaime on 7/29/2014.
 */

Player = function(name, nickName, lastName) {
    this.name = name;
    this.nickName = nickName;
    this.lastName = lastName;
    this.score = 0;
    this.field = null;
};

Player.prototype.createField = function(){
    this.field = new Field();
};

Player.prototype.getField = function() {
    return this.field;
};