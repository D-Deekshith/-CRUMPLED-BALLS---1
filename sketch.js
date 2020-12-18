
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper,ground,dustBin1,dustBin2,dustBin3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,600,10);
  ground = new Ground(400,680,800,5);
  dustBin1 = new Box(500,628,10,100);
  dustBin2 = new Box(600,672,190,10);
  dustBin3 = new Box(690,628,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();
  keyPressed();
  keyPressedOver();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, 
      {x:15, y: -15})
   }
 }

 function keyPressedOver() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, 
      {x:-15, y: +15})
   }
 }

