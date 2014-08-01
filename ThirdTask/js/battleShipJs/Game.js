/**
 * Created by Jaime on 7/29/2014.
 */

Game  = function() {
    this.startTime
    this.endTime
    this.players = [];

    // Game / create
    /*
     end = function() {};
     createField = function() {};
     drawField = function() {};
     createShips = function() {};
     drawShips = function() {};
     getPlayerShot = function() {};
     */
}

Game.prototype.createPlayer = function() {
    var name = window.prompt('Hello\nPlease introduce your name :');
    var nickName = window.prompt('Now, introduce your nickname : ');

    var newPlayer = new Player(name, nickName);
    this.players.push(newPlayer);
};

Game.prototype.start = function() {
    for (var i = 0; i < this.players.length; i++){
        this.players[i].createField();
    }
};

