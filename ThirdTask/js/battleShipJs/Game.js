/**
 * Created by Jaime on 7/29/2014.
 */

Game  = function() {
    this.startTime = (new Date()).toLocaleString();
    this.endTime
    this.players = [];
};

/**
 * This function gets the name and nickName from the user to create the new player.
 *
 * @author Jaime Barriga
 */
Game.prototype.createPlayer = function() {
    var name = window.prompt('Hello\nPlease introduce your name :');
    var nickName = window.prompt('Now introduce your nickname : ');
    var newPlayer = new Player(name, nickName);
    this.players.push(newPlayer);
};

/**
 * This is the gear that stars, runs and end the game.
 *
 * @author Jaime Barriga
 */
Game.prototype.start = function() {
    for (var i = 0; i < this.players.length; i++){
        this.players[i].createField();
    }

    var player = this.players[0];
    var playerName = player.getName();
    var nickName = player.getNickName();
    var score = 0;

    while((player).getField().getFieldStatus()==INITIAL_STATUS) {
        score = player.getField().getScore();
        console.log('Nickname : '+nickName+ '  Score : '+score);
        var xPos = window.prompt('Enter the X coordinate for the shot : ');
        var yPos = window.prompt('Enter the Y coordinate for the shot : ');

        this.players[0].getField().shoot(xPos,yPos);
    }
    this.endTime = (new Date()).toLocaleString();
    alert('GAME OVER !!! '+this.endTime);
};