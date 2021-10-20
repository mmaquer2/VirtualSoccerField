'use strict';

//Declartions for team formations

var FOUR_FOUR_TWO = 0

var THREE_FIVE_TWO = 0;

var Player = require( "../Include/Player")

module.exports = class Team {

    constructor() {

        var playerList = [];
        var teamPlayerCount = 0;
        var formation = "";
        var playerList = [];

        console.log("Created a new team")
    }

    //function to add player to team
    addPlayer(team, postion) {

        if(playerList.length() != 11) {

            Player.addPlayer(playernum,team,postion);    
        }

        else {
            
            console.log("Team already at 11 players")
            alert("Team already at 11 players")
        }
        
        
    }

    removePlayer() {

        if(playerList.length() != 0) {

            Player.removePlayer(playerNum);
          
        }

        else {
            
            console.log("team is already empty")
            alert("Team is already empty");

        }

        //check if there are players to remove


    }

    //function to adjust team formations
    adjustFormation() {



    }


    
}


