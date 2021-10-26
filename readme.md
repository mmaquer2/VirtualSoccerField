# Virtual Soccer Field

- Virtual Soccer Field Model built with Three.js

- Features: 
    - Virtual soccer field designed to be a coach's and athlete tool
    - Can create players with the drop down menu and assign them specific teams, and move them around the field, change formations
    - Can drag players and soccer ball around the field 

- Features in Development:
    - Set Plays (Corner Kicks, free kicks, throw ins)
    - Save field state and plays
    - Player routes and movement

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

- upon using the "npm run dev" command the program will launch on your defualt browser
- the teams (red and blue) will be loaded onto the field with a default setting of a 4-4-2 formation, with the ball placed in the center of the field
    - from this default setting the team formations can be changed and players be dragged around as desired 
- to change formation of a team, or add/remove players, click on the dropdown menus of the team as desired

- changing camera views
    - To change views from for corner kicks, free kicks, throw ins, press "c" on your keyboard or default I/O device 

- Reset Board
    - To reset the field to its default settings, press the escape key on your keyboard or default I/O device


## Testing:
- Jest test scripts located in ./test

```bash
# Run the program unit tests
npm run test

```

## Resources:
- https://threejsfundamentals.org/
- https://threejs.org/docs

- Credit to Bruno Simon and contributors for the three.js starter code found here:
https://github.com/designcourse/threejs-webpack-starter