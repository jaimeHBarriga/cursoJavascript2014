/**
 * Created by Jaime on 7/29/2014.
 */

Player = function(name, nickName, lastName) {
    // this.id
    this.name = name;
    this.nickName = nickName;
    this.lastName = lastName;
    this.score = 0;
    this.field = null;
    this.shots = []; // TODO: Review later
}

Player.prototype.createField = function(){
    this.field = new Field();
};