module.exports = class Player {

    constructor(teamColor, position, x , y ,z) {

        //valdiate Player input
        if( teamColor != "red" || teamColor != "blue") {
           // throw("Invalid Team color")
        }

        //validate Player field position
        if (position != "def" || position != "mid" || position != "for" ) {
            //throw("Invalid Field Position")

        }

        



    }

    setTeam(){


        
    }


    setLocation() {



    }



}