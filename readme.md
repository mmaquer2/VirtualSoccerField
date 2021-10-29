# Virtual Soccer Field

![Image of program](https://github.com/mmaquer2/virtual_soccer_field/blob/main/images/complete_field.png)

- Virtual Soccer Field Model built with Three.js, meant to be used as a digital white board to help coach and train soccer teams


- Features: 
    - Can drag players and soccer ball around the field 

- Features in Development:
    - Set Plays (Corner Kicks, free kicks, throw ins)
    - Save field state and plays
    - Player routes and movement
    - drag players to form a free kick "wall" 

## Setup:
``` bash
# ensure node and npm are installed on your machine

# Install dependencies (only the first time)
npm install

# Use this option to run a local copy of the program your machine
# will create a web server on port $8080
npm run dev

```

## How to use:

- To open the program:
    - on the command line inside the project repo run the "npm run dev" command, the program will launch in your defualt browser
    - the teams (red and blue) will be loaded onto the field with a default setting of a 4-4-2 formation, with the ball placed in the center of the field
    - from this default setting the team formations can be changed and players be dragged around as desired 

- change formations,
    - to change formation of a team, or add/remove players, click on the dropdown menus of the team as desired

- navigation,
    - use your mouse to move around the field and zoom in and out accordingly

- moving objects,
    - you can click and drag objects with your mouse cursor and move them around the field 

- changing camera views,
    - To change views from for corner kicks, free kicks, throw ins, press "c" on your keyboard or default I/O device 

- Reset Board,
    - To reset the field to its default settings, press the escape key on your keyboard or default I/O device


## Testing:
- Jest test scripts located in ./test

```bash
# Run the program unit tests
npm run test

```

# Deploy

```bash

# deploy to a static site with surge. sh, npm cli will cd into dist build dir and launch app to the CNAME within the cname file

npm run deploy

```

## Resources:
- https://threejsfundamentals.org/
- https://threejs.org/docs

- Credit to Bruno Simon and contributors for the three.js starter code found here:
https://github.com/designcourse/threejs-webpack-starter

