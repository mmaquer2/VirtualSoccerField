
//import team and player classes from include

var Team = require( "../Include/Team")
var Player =  require("../Include/Player")

//class to handle the state of the game during the animation loop
class FieldState {

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

//test field constructor 
function TestField() {

    let myField = new FieldState();
    let myAthlete = new Player(-1, "red", "for", 1,2,4);

}

TestField();