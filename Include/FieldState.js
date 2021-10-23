
//import team and player classes from include

var Team = require( "../Include/Team")
var Player =  require("../Include/Player")


//class to handle the state of the game during the animation loop
//this field state class acts as the main controller for the state of the teams and players assigned to it
//this class responds to clicks within the team's menu, such as adding and removing players, and changing formaitons

module.exports = class FieldState {

    //constructor function
    constructor(){

        console.log("creating field state object")
        
        var redTeamPlayers;
        var blueTeamPlayers;

        let blueTeam = new Team();
        let redTeam = new Team();

        var fieldPlayerCount;

        
        //set inital formations for the teams 
       
        //blueTeam.setFormation();

        //redTeam.setFormation()
        

    }

    //function to set the inital default settings for the soccer field
    //both red and blue teams have 11 players, in a 4-4-2 formation 
    initField(){
        console.log("Setting field for default settings...")
        alert("setting field default settings..")
        
        //add players red team 4-4-2 formation

        //set red team player count to 11

        //add players for blue team 4-4-2 formation

        //set blue team player count to 11

    }

    //change the location of the camera based on game scenario
    changeCamera(playType) {

        if(playType = "corner_left") {
    
        }
    
        if(playType = "corner_right") {
    
        }
    
        if(playType = "free_kick_right") {
    
        }
    
        if(playType = "free_kick_left") {
    
        }


        if(playType = "penalty_kick") {
    
        }

        if(playType = "throw_right") {
    
        }

        if(playType = "throw_left") {

    
        }
    
    }

    //function to change the red team
    changeRedTeam() {
        

    }

    //function to change the blue team
    changeBlueTeam(){

    }


}
