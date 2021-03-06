const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  angle = -PI/4

  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(0,height-1,width*2,1);
  canon = new Canon(180,110,110,50,angle);
  
}

function draw() {
  background(189);
  imageMode(CENTER);
  image(backgroundImg, 600, 300, width, height);

  

  Engine.update(engine);
  ground.display();
  canon.display();

  tower.display();
  
 
}







