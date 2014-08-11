/**
 * Created by Jaime on 7/29/2014.
 */

Game  = function() {
    this.startTime
    this.endTime
    this.players = [];
};

Game.prototype.createPlayer = function() {
    var _name = window.prompt('Hello\nPlease introduce your name :');
    var _nickName = window.prompt('Now introduce your nickname : ');

    var _newPlayer = new Player(_name, _nickName);
    this.players.push(_newPlayer);
};

Game.prototype.start = function() {
    for (var i = 0; i < this.players.length; i++){
        this.players[i].createField();
    }

    while((this.players[0]).getField().getFieldStatus()==INITIAL_STATUS) {

        var xPos = window.prompt('Enter the X coordinate for the shot : ');
        var yPos = window.prompt('Enter the Y coordinate for the shot : ');

        this.players[0].getField().shoot(xPos,yPos);
    }
};

