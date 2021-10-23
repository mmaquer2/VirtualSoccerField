import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as dat from 'dat.gui'


//var FieldState = require( "../Include/FieldState")

//Set Geometery for player model height and width
var PLAYER_HEIGHT = .02;
var PLAYER_WIDTH = .01;

// Debug
const gui = new dat.GUI()

// get canvas from markup 
const canvas = document.querySelector('canvas.webgl')

// create our three.js scene
const scene = new THREE.Scene()

//create our mesh Texture Loaders
const loader = new THREE.TextureLoader();

//load the field texture here
//const fieldTexture = loader.load('/random_map_three.jpg')

//load the soccer ball texture here
//const textureImgage = loader.load("./land_map_example.png")

const geometry = new THREE.PlaneBufferGeometry(20, 40, 40, 20);
const material = new THREE.MeshBasicMaterial({
color: 0x22C717
});

const mesh = new THREE.Mesh(geometry, material);

//declaring our sphere mesh for our sun
const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(20, 20, 20);

//create mesh for soccer ball here

//const sphereGeometery ...


//insert players onto the scene
function insertPlayers() {

    //for each num of blue players
    createPlayers("blue")

    //for each num of red players
    //createPlayers("red")
   
    
}

//function to create new players
function createPlayers(teamColor){

    //create players
    var playerGeometery  = new THREE.BoxGeometry(PLAYER_WIDTH, PLAYER_HEIGHT),
    playerMaterial = new THREE.MeshLambertMaterial({ color: 0xCCCCCC }),
    player = new THREE.Mesh(playerGeometery, playerMaterial);
    
    scene.add(player);

}




// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.9)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

const amblight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(amblight);


/**
 * Sizes
 */
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


//Set play locations

//corner kick left
//conrner kick right
//free kick
//throw in

//change camera postion based on play selection
function changeCamera(playType) {

    if(playType = "corner_left") {

    }

    if(playType = "corner_right") {

    }

    if(playType = "free_kick_right") {

    }

    if(playType = "free_kick_left") {

    }
    

}



/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 50)
camera.position.x = 0
camera.position.y = -50
camera.position.z = 20
scene.add(camera)




// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.keys = {
    LEFT: 'ArrowLeft', //left arrow
    UP: 'ArrowUp', // up arrow
    RIGHT: 'ArrowRight', // right arrow
    BOTTOM: 'ArrowDown' // down arrow
}



// Call Three Js Web GL Renderer 
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

//set the height and width of our canvas on the web browser
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//set the background color of our renderer 
renderer.setClearColor(0xffff, 1)

// declare a clock to animate our scene
const clock = new THREE.Clock()

//function to handle key press during the scene
function onDocumentKeyDown(event) {
    //console.log("key pressed")

    //keypress to open the menu

    //key press to quit

    //

}



//this is the event loop
const tick = () => {

    //insert field and sun to scene
    scene.add(sphere);
    scene.add(mesh);

     //insert meshes to scene
    //insertPlayers();

    //add evet listenr to keybaord presses
    document.addEventListener("keydown", onDocumentKeyDown, false);
    
    const elapsedTime = clock.getElapsedTime()

    // Update Orbital Controls
    controls.update()

    //render scene and camera
    renderer.render(scene, camera)

    // Call tick again to move to the next frame
    window.requestAnimationFrame(tick)
}

tick();




