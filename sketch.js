
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground1 = new Ground(400,690,800,10)
	//Create the Bodies Here.
hammer1 = new Hammer(400,400)
stone = new Item(700,350,130,130)
iron = new Item(50,400,90,40)
rubber = new Circle(400,600,70)
sand1 = new Circle(420,600,15)
sand2 = new Circle(420,600,15)
sand3 = new Circle(420,600,15)
sand4 = new Circle(420,600,15)
sand5 = new Circle(420,600,15)
sand6 = new Circle(420,600,15)
sand7 = new Circle(420,600,15)
sand8 = new Circle(420,600,15)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  ground1.display()
 hammer1.display()
 stone.display()
 iron.display()
 rubber.display()
 sand1.display()
 sand2.display() 
 sand3.display()
 sand4.display()
 sand5.display()
 sand6.display()
 sand7.display()
 sand8.display()
}



