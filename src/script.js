import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

var PLAYER_HEIGHT = .02;
var PLAYER_WIDTH = .01;


// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// create our three.js scene
const scene = new THREE.Scene()



//create our mesh Texture Loaders
const loader = new THREE.TextureLoader();

//load the field texture here
//const fieldTexture = loader.load('/random_map_three.jpg')

//load the ball texture here
//const textureImgage = loader.load("./land_map_example.png")


// declaring our mesh plane
//const plane = new THREE.Mesh(geometry, material)

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


//create players
var playerGeometery  = new THREE.BoxGeometry(PLAYER_WIDTH, PLAYER_HEIGHT),

playerMaterial = new THREE.MeshLambertMaterial({ color: 0xCCCCCC }),
player = new THREE.Mesh(playerGeometery, playerMaterial);

scene.add(player);


scene.add(sphere);
scene.add(mesh);


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




/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 50)
camera.position.x = 0
camera.position.y = -50
camera.position.z = 20
scene.add(camera)


// camera starting postion 0, -50, 20

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

/**
 * option to Animate our scene
 */

const clock = new THREE.Clock()

const tick = () => {

    
    const elapsedTime = clock.getElapsedTime()

    // uncomment this line to rotate the terrain along the x axis
    //plane.rotation.z = .5 * elapsedTime

    // Update Orbital Controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()