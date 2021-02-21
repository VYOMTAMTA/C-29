const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

  blocks10 = Bodies.rectangle(200,200,30,40);

  //ball holder with slings
  ball = Bodies.circle(100,200,20);
  World.add(world,ball);
var s_options ={
    isStatic: true
}
  stand1 = Bodies.rectangle(375, 380, 300 ,20, s_options);
  World.add(world, stand1);

  stand2 = Bodies.rectangle(700, 270, 300 ,20, s_options);
  World.add(world, stand2);
  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  rectMode(CENTER);
  rect(stand1.position.x, stand1.position.y, 300, 20);
  rect(stand2.position.x, stand2.position.y, 300, 20);
  ellipseMode(CENTER);
ellipse(ball.position.x, ball.position.y, 20);
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();

  strokeWeight(2);
  stroke(15);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
 
  block13.display();
  block14.display();
  block15.display();

  block16.display();

  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
 
  blocks6.display();
  blocks7.display();
  blocks8.display();
  
  blocks9.display();




  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.Fly();
}
