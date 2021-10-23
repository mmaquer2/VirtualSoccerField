module.exports = class Player {

    // Player class construction
    constructor(playerNumber, teamColor, position, x , y ,z) {
        this.playerNumber = playerNumber;

        //valdiate Player input
        if( teamColor != "red" || teamColor != "blue") {
           //throw("Invalid Team color")
        }

        //validate Player field position
        if (position != "def" || position != "mid" || position != "for" ) {
            //throw("Invalid Field Position")

        }

        //validate player number
        if (playerNumber < 0 ) {
            alert("invalid player number entered: cannot be less than zero");  
            throw("invalid player number entered: cannot be less than zero");
        }
        
        //validate player location
        if ( typeof(x) != "number" || typeof(y) != "number" || typeof(z) != "number"){

            throw("invalid player location attempted")

        }

        //set player location on the field
        //setLocation()

    

    }

    //set the location of the athlete
    setLocation(x , y , z) {



    }

    //change the location of the athlete-player object instance
    changeLocation(){



    }

    //get the player number of the athlete-player object instance
    getPlayerNumber(){

        console.log(this.playerNumber);
        return this.playerNumber;


    }



}