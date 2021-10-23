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
    addPlayer(team, postion, playerNumber) {

        //use three.js state to get coordinates for player location upon creation
        const x = 0;
        const y = 0;
        const z = 0;
        
        if(playerList.length() != 11) {

            //create a new player-athlete class
            let newAthlete = new Player(playerNumber, team, postion, x, y ,z);
            //insert the player to the new list
            playerList.append(newAthlete);

            

        }

        else {
            
            console.log("Team already at 11 players")
            alert("Team already at 11 players")
        }
        
        
    }

    

    removePlayer(playerNum) {

        if(playerList.length() != 0) {

            playerList.remove(playerNum)
          
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


