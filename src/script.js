
//import the FieldState class 
import * as Field from '../Include/FieldState'
//import Three.js modules and style sheets from HTML
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { DragControls } from 'three/examples/jsm/controls/DragControls.js'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


import * as dat from 'dat.gui'


//list of our object meshes
var objects = []


// Debug gui handler
const gui = new dat.GUI()

// get canvas from index.html
const canvas = document.querySelector('canvas.webgl')

// create our three.js scene
const scene = new THREE.Scene()

//create our mesh Texture Loaders
const loader = new THREE.TextureLoader();

//load the field texture 
//const fieldTexture = loader.load('/random_map_three.jpg')

//load the field texture 
const textureImgage = loader.load("soccer.png")

//insert HTML Element to describe keyboard commands/instructions 

const geometry = new THREE.PlaneBufferGeometry(70, 80, 40, 70);
const material = new THREE.MeshBasicMaterial({
  color: "green",
  //insert the texture map for the field color
  //map: textureImgage
});
const fieldMesh = new THREE.Mesh(geometry, material);

//declaring our sphere mesh for our sun
const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ 
  color: 0xffff00,

  //soccer ball material here
  //map: "soccer_ball.png"

});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(20, 70, 20);

//create mesh for soccer ball here
//const sphereGeometery ...
const ballGeometry = new THREE.SphereGeometry(1, 7, 7);
const ballMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF });
const soccerBall = new THREE.Mesh(ballGeometry, ballMaterial);
soccerBall.position.set(1,1,1);

//insert ball into objects list
objects.push(soccerBall)

//create a player mesh
const playerGeometry = new THREE.ConeGeometry(1, 2, 5);
const bluePlayerMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF });

//declare the first blue mesh to set the model for a 
const blueMesh = new THREE.Mesh(playerGeometry,bluePlayerMaterial);
blueMesh.position.set(1,10,1)

//rotate
blueMesh.rotation.x = Math.PI / 2;

// cloning the player mesh 
var blueTwo = blueMesh.clone();
blueTwo.position.set(-10,10,1)

var blueThree = blueTwo.clone();
blueThree.position.set(10,10,1)

var blueFour = blueTwo.clone();
blueThree.position.set(10,10,1)

var blueFive = blueTwo.clone();
blueFive.position.set(10,20,1)

var blueSix = blueTwo.clone();
blueSix.position.set(10,15,1)

var blueSeven = blueTwo.clone();
blueSeven.position.set(5,10,1)

var blueEight = blueTwo.clone();
blueEight.position.set(-10,5,1)

var blueNine = blueTwo.clone();
blueNine.position.set(5,5,1)

var blueTen = blueTwo.clone();
blueTen.position.set(5,3,1)

var blueEleven = blueTwo.clone();
blueEleven.position.set(10,5,1)

//insert blue players into objects list
objects.push(blueMesh)
objects.push(blueTwo)
objects.push(blueThree)
objects.push(blueFour)
objects.push(blueFive)
objects.push(blueSix)
objects.push(blueSeven)
objects.push(blueEight)
objects.push(blueNine)
objects.push(blueTen)
objects.push(blueEleven)


//
//Create the red team players
//
const redPlayerMaterial = new THREE.MeshBasicMaterial({color: 0xff0000 });

//declare the first blue mesh to set the model for a 
const redMesh = new THREE.Mesh(playerGeometry,redPlayerMaterial);
redMesh.position.set(1,-10,1)

redMesh.rotation.x = Math.PI / 2;

var redTwo = redMesh.clone();
redTwo.position.set(-10,-10,1)

var redThree = redMesh.clone();
redThree.position.set(10,-10,1)
////////////////////////////////

var redFour = redMesh.clone();
redFour.position.set(-10,-20,1)

var redFive = redMesh.clone();
redFive.position.set(1,-20,1)

var redSix = redMesh.clone();
redSix.position.set(20,-20,1)

var redSeven = redMesh.clone();
redSeven.position.set(-10,-10,1)

var redEight = redMesh.clone();
redEight.position.set(-10,-10,1)

var redNine = redMesh.clone();
redNine.position.set(-10,-10,1)

var redTen = redMesh.clone();
redTen.position.set(-10,-10,1)

var redEleven = redMesh.clone();
redEleven.position.set(-10,-10,1)

//insert red team players into object list 
objects.push(redMesh)
objects.push(redTwo)
objects.push(redThree)
objects.push(redFour)
objects.push(redFive)
objects.push(redSix)
objects.push(redSeven)
objects.push(redEight)
objects.push(redNine)
objects.push(redTen)
objects.push(redEleven)


//create Goal One
const goalGeometery = new THREE.BoxGeometry(20,10,10)
const goalMaterial = new THREE.MeshBasicMaterial({color: 0x808080})

const goalMeshOne = new THREE.Mesh(goalGeometery, goalMaterial)
goalMeshOne.position.set(1,45,1);

//create Goal Two
var goalMeshTwo = goalMeshOne.clone();
goalMeshTwo.position.set(1,-45,1);

// Create Lights
const pointLight = new THREE.PointLight(0xffffff, 0.9)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

//soft white light from the sun mesh object
const amblight = new THREE.AmbientLight(0x404040); 
scene.add(amblight);

//set size of the window viewport
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


// Base camera
const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height, 1, 1000)
camera.position.x = 0
camera.position.y = -20
camera.position.z = 10
scene.add(camera)


// Call Three Js Web GL Renderer 
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})


//set the height and width of our canvas on the web browser
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1))

//set the background color of our renderer 
renderer.setClearColor(0xffff, 1)

//insert a renderer element into the DOM
document.body.appendChild( renderer.domElement );

// Controls for the orbital view 
const orbitControls = new OrbitControls(camera, renderer.domElement )

// enable drag controls for all 3d objects (meshes)
const dragControls = new DragControls( objects, camera, renderer.domElement );
dragControls.addEventListener( 'dragstart', function (event) { orbitControls.enabled = false; } );
dragControls.addEventListener( 'drag', function (event) {  event.object.position.z = 1; } );

dragControls.addEventListener( 'dragend', function (event) { orbitControls.enabled = true; } );


  
//declare a clock to animate our scene
const clock = new THREE.Clock()

//function to rotate the camera based on key press "C"
var cameraCounter = 0
function rotateCamera() {

  if(cameraCounter == 0) {
    camera.position.x = 0
   camera.position.y = -20
   camera.position.z = 20  
  
    cameraCounter = cameraCounter + 1;
    return;

  }
  
  if(cameraCounter == 1) {
   // alert("second camera view")
   camera.position.x = 0
   camera.position.y = -20
   camera.position.z = 10
    ++cameraCounter;
    return;
  }
   
  if(cameraCounter == 2) {
    //alert("3rd camera view")
    camera.position.x = 0
    camera.position.y = -20
    camera.position.z = 10
    ++cameraCounter;
    return;
  }

  if(cameraCounter == 3) {
    camera.position.x = 0
    camera.position.y = -40
    camera.position.z = 10

    //reset the camera back to the original position
    cameraCounter = 0;
    return;
  }

}


//function to handle key press during the scene
function onDocumentKeyDown(event) {
    
    //variable to catch key press event handler 
    var keyCode = event.which;
   
    //keypress "R" to open red team menu
    if(keyCode == 82) {
      document.getElementById("red_team").classList.toggle("show");
    }

    //keypress "B" to open blue team menu
    if(keyCode == 66) {
      document.getElementById("blue_team").classList.toggle("show");
    }

    //keypress "C" rotate camera position
    if(keyCode == 67) {
      rotateCamera();
    }

    //keypress "ESC" to restart program
    if(keyCode == 27) {
      
    }

}

//create an instance for our field
const myField = new Field();

//call function to launch field inital settings
myField.initField();


//buton handler for the blue team menu
const blue_button = document.querySelector('#blue_menu');
    //display blue team menu when button is clicked
    blue_button.addEventListener('click', () => {
        //alert("blue menu button pressed")
        document.getElementById("blue_team").classList.toggle("show");
      

});

//buton handler for the red team menu
const red_button = document.querySelector('#red_menu');
    //display red team menu when button is clicked
    red_button.addEventListener('click', () => {
        //alert("red menu button pressed")
        document.getElementById("red_team").classList.toggle("show");

});

  // open/close blue team content menu on click
  window.onclick = function(event) {
    if (!event.target.matches('.blue')) {
      var dropdowns = document.getElementsByClassName("blue_content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

    // open/close red team content menu onclick
    window.onclick = function(event) {
        if (!event.target.matches('.red')) {
          var dropdowns = document.getElementsByClassName("red_content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    
//this is the event loop
const tick = () => {
    document.addEventListener("keydown", onDocumentKeyDown, false);

    //insert field, sun, and soccer ball to the scene
    scene.add(sphere);
    scene.add(fieldMesh);
    scene.add(soccerBall)

    //insert blue players to scene
    scene.add(blueMesh)
    scene.add(blueTwo)
    scene.add(blueThree);
    scene.add(blueFour)
    scene.add(blueFive)
    scene.add(blueSix)
    scene.add(blueSeven)
    scene.add(blueEight)
    scene.add(blueNine)
    scene.add(blueTen)
    scene.add(blueEleven)

    //insert red team onto scene
    scene.add(redMesh)
    scene.add(redTwo)
    scene.add(redThree)
    scene.add(redFour)
    scene.add(redFive)
    scene.add(redSix)
    scene.add(redSeven)
    scene.add(redEight)
    scene.add(redNine)
    scene.add(redTen)
    scene.add(redEleven)

    //insert goals onto the scene
    scene.add(goalMeshOne);
    scene.add(goalMeshTwo);
 
    const elapsedTime = clock.getElapsedTime()

    // Update Orbital Controls
   orbitControls.update()

    //render scene and camera
    renderer.render(scene, camera)

    // Call tick again to move to the next frame
    window.requestAnimationFrame(tick)
}

tick();




