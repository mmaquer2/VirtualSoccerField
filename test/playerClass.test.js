
import * as THREE from 'three'
const Player = require('../Include/Player')

// verify constructor init
test('Creating blue player instance' , () => {


   const x = 0;
   const y = 0;
   const z = 0;

   const vecLoc = new THREE.Vector3( x, y, z );

   const myAthlete = new Player(10, "blue", "for", vecLoc)
   const myAthleteTwo = new Player(10, "blue", "for", vecLoc )
   const myAthleteThree = new Player(10, "blue", "for", vecLoc )

   expect(myAthlete.getPlayerNumber()).toBe(10);


})

test('Creating red player instance' , () => {

    const x = 0;
    const y = 0;
    const z = 0;
 
    const vecLoc = new THREE.Vector3( x, y, z );
 
    const myAthleteOne = new Player(9, "red", "def", vecLoc )
    const myAthleteTwo = new Player(11, "red", "mid", vecLoc)
    const myAthleteThree = new Player(7, "red", "for", vecLoc )
 
    expect(myAthleteTwo.getPlayerNumber()).toBe(11);
 
 
 })

test('Catch Invalid Number' , () => {

    const x = 0;
    const y = 0;
    const z = 0;
 
    const vecLoc = new THREE.Vector3( x, y, z );

    const t = () => {
        const myAthlete = new Player(-1, "blue", "for", vecLoc)
    };
    
    expect(t).toThrow("Invalid player number entered: cannot be less than zero");

})

//catch invalid team
test('Catch Invalid Team' , () => {

    const x = 0;
    const y = 0;
    const z = 0;
 
    const vecLoc = new THREE.Vector3( x, y, z );

    const t = () => {
        const myAthlete = new Player(1, "yellow", "for", vecLoc)
    };
    
    expect(t).toThrow("Invalid Team Color");

})

//catch invalid location type
test('Catch Invalid Team' , () => {

    const x = 0;
    const y = 0;
    const z = 0;
 
    const vecLoc = new THREE.Vector3( x, y, z );

    const t = () => {
        const myAthlete = new Player(1, "red", "hero", vecLoc)
    };
    
    expect(t).toThrow("Invalid Field Position");

})

