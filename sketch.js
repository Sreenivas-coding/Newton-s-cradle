
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roofObject;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(200,300,100,10);
	bobDiameter = 30
	bobObject1 = new Bob(500,400,10);
	bobObject2 = new Bob(400,400,10);
	bobObject3 = new Bob(300,400,10);
	bobObject4 = new Bob(200,400,10);
	bobObject5 = new Bob(100,400,10);

	//rope1= new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	//rope2= new Rope(bobObject2.body,roofObject.body,-bobDiameter,0);
	//rope3= new Rope(bobObject3.body,roofObject.body,0,0);
	//rope4= new Rope(bobObject4.body,roofObject.body,bobDiameter*2,0);
	//rope5= new Rope(bobObject5.body,roofObject.body,bobDiameter,0);
	
	
	//ground = Bodies.rectangle(width/2,height-10, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-0.020,y:-0.020})
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bobObject1.body.position.x=mouseX
  bobObject1.body.position.y=mouseY
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  //rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
  //rope5.display();
  rect(ground.position.x,ground.position.y,width,10)
}



