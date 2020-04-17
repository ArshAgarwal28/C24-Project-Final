const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// You could have multiple flags like: start, launch to indicate the state of the game.
var engine, world;
var ground;
var tank, shooter;
var attShooter;
/* const {Engine} = Matter 
is the same as const Engine = Matter.Engine
*/

var posX = 172;
var posY = 267;
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600, height + 0, 1200, 20);


    shooter = new Shooter(posX, posY);
    tank = new Tanker(150, 315, 350, 250);  
    attShooter = new SlingShot(shooter.body, {x: posX,y: posY})
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background("white");
    Engine.update(engine);

    ground.display();

    tank.display();
    shooter.display();

}


function keyReleased() {
    // Call the shoot method for the cannon.
}