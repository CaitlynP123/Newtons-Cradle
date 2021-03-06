
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 30;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	bob1 = new Bob(200,500)
	bob2 = new Bob(300,500)
	bob3 = new Bob(400,500)
	bob4 = new Bob(500,500)
	bob5 = new Bob(600,500)
	
	roofObject = new Roof(400, 100, 500, 75)
	
	rope1 = new Chain(bob1.bob, roofObject.roof, -200, 0)
	rope2 = new Chain(bob2.bob, roofObject.roof, -100, 0)
	rope3 = new Chain(bob3.bob, roofObject.roof, 0, 0)
	rope4 = new Chain(bob4.bob, roofObject.roof, 100, 0)
	rope5 = new Chain(bob5.bob, roofObject.roof, 200, 0)

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
 	background("white");

	roofObject.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();


  	drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(bob1.bob, bob5.bob.position,{x:-150, y:150})
	}
}

