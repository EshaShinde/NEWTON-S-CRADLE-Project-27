
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  =  Matter.Constraint; 
	
var ground1

var roof

var bobObject1
var bobObject2
var bobObject3
var bobObject4
var bobObject5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,490,50);
	
	ground1 = new Ground(600,149,50,50);
	ground2 = new Ground(500,149,50,50);
	ground3 = new Ground(200,149,50,50);
	ground4 = new Ground(400,149,50,50);
	ground5 = new Ground(300,149,50,50);

	//ground6 = new Ground(400,150,490,50);

	bobObject1 = new Bob(600,100,99);

	bobObject2 = new Bob(200, 200,99);

	bobObject3 = new Bob(400, 300,99);

	bobObject4 = new Bob(300, 400,99);

	bobObject5 = new Bob(500, 500,99);

    chain1= new Rope(bobObject1.body,ground1.body)

	chain2= new Rope(bobObject2.body,ground3.body)
	
	chain3= new Rope(bobObject3.body,ground4.body)

	chain4= new Rope(bobObject4.body,ground5.body)
	
	chain5= new Rope(bobObject5.body,ground2.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
    drawSprites();

 roof.display();

 ground1.display();
 ground2.display();
 ground3.display();
 ground4.display();
 ground5.display();

 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();

 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:75,y:-75});

	}
}

