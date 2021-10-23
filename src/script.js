

//import Three.js modules and style sheets from HTML
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as dat from 'dat.gui'

// Import our classes

//this is causing an error: the field wont load if this is uncommented
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

//load the field texture 
//const fieldTexture = loader.load('/random_map_three.jpg')

//load the soccer ball texture 
//const textureImgage = loader.load("./land_map_example.png")

const geometry = new THREE.PlaneBufferGeometry(30, 40, 40, 30);
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
const ballGeometry = new THREE.SphereGeometry(1, 7, 7);
const ballMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF });
const soccerBall = new THREE.Mesh(ballGeometry, ballMaterial);
soccerBall.position.set(1,1,1);


// Lights
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
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 50)
camera.position.x = 0
camera.position.y = -50
camera.position.z = 20
scene.add(camera)


// Controls for the orbital view 
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

//set a renderer dom element for draggable objects 
//document.body.appendChild(renderer.domElement)

//declare a clock to animate our scene
const clock = new THREE.Clock()


//function to handle key press during the scene
function onDocumentKeyDown(event) {
    //console.log("key pressed")
    //alert("key pressed")
   
    //keypress "r" to open red team menu

    //keypress "b" to open blue team menu

    //keypress "q" to quit program

}



//button handler for the camera menu 
const camera_button = document.querySelector('#camera_menu');
    camera_button.addEventListener('click', () => {
        alert("camera menu button pressed")
    


});



//buton handler for the red team menu
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
    


//controls for soccer ball
//const dragControls = new DragControls(soccerBall, camera, renderer.domElement)

// controls.addEventListener('dragstart', function (event) {
//     event.object.material.opacity = 0.33
// })
// controls.addEventListener('dragend', function (event) {
//     event.object.material.opacity = 1
// })


//this is the event loop
const tick = () => {
    document.addEventListener("keydown", onDocumentKeyDown, false);

    //insert field and sun to scene
    scene.add(sphere);
    scene.add(mesh);
    scene.add(soccerBall)
 
    const elapsedTime = clock.getElapsedTime()

    // Update Orbital Controls
    //controls.update()

    //render scene and camera
    renderer.render(scene, camera)

    // Call tick again to move to the next frame
    window.requestAnimationFrame(tick)
}

tick();




