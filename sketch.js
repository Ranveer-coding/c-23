var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rd,rd2,rd3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	packageSprite=createSprite(width/2, 80, 10,10) ;
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rd=createSprite(400,650,180,20)
	rd2=createSprite(300,585,20,150)
	rd3=createSprite(500,585,20,150)
	rd.shapeColor=color("red")
	rd2.shapeColor=color("red")
	rd3.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites()};
  function keyPressed() {{ if (keyCode === DOWN_ARROW) { Matter.Body.setStatic(packageBody,false); } }

  }
function left(){ if   (keyCode === LEFT_ARROW)helicopterSprite.velocity=-5;}

function right(){ if   (keyCode === right_ARROW)helicopterSprite.velocity=5;}

