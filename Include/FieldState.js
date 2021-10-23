
//import team and player classes from include

var Team = require( "../Include/Team")
var Player =  require("../Include/Player")

//class to handle the state of the game during the animation loop
class FieldState {

    
    constructor(){

        console.log("creating field state object")
        
        var redTeamPlayers;
        var blueTeamPlayers;

        let blueTeam = new Team();
        let redTeam = new Team();

        var fieldPlayerCount;
        

    }


   teamAddPlayer() {



   }

   teamRemovePlayer() {


   }

   teamAdjustFormation() {


   }


}

//test field constructor 
function TestField() {

    let myField = new FieldState();
    let myAthlete = new Player(-1, "red", "for", 1,2,4);

}

TestField();