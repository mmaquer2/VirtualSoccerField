

const Player = require('../Include/Player')

// verify constructor init
test('Creating blue player instance' , () => {
    
   const myAthlete = new Player(10, "blue", "for", 1,1,1 )
   const myAthleteTwo = new Player(10, "blue", "for", 1,1,1 )
   const myAthleteThree = new Player(10, "blue", "for", 1,1,1 )

   expect(myAthlete.getPlayerNumber()).toBe(10);


})

test('Creating red player instance' , () => {
 
    const myAthleteOne = new Player(9, "red", "def", 1,1,1 )
    const myAthleteTwo = new Player(11, "red", "mid", 1,1,1 )
    const myAthleteThree = new Player(7, "red", "for", 1,1,1 )
 
    expect(myAthleteTwo.getPlayerNumber()).toBe(11);
 
 
 })

test('Catch Invalid Number' , () => {

    const t = () => {
        const myAthlete = new Player(-1, "blue", "for", 1,1,1 )
    };
    
    expect(t).toThrow("Invalid player number entered: cannot be less than zero");

})

//catch invalid team
test('Catch Invalid Team' , () => {

    const t = () => {
        const myAthlete = new Player(1, "yellow", "for", 1,1,1 )
    };
    
    expect(t).toThrow("Invalid Team Color");

})

//catch invalid location type
test('Catch Invalid Team' , () => {

    const t = () => {
        const myAthlete = new Player(1, "red", "hero", 1,1,1 )
    };
    
    expect(t).toThrow("Invalid Field Position");

})

