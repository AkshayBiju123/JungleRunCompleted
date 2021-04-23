
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rock , rockImg , rockGroup
var bird, birdImg, birdGroup
var elephant, elephantImg
var backgroundImg
var groundImg
var fh, fhImg
var invisibleGround 
var gameOver, thud , eagle
var score=0
function preload(){
	
elephantImg = loadAnimation("sprites/0.png","sprites/1.png","sprites/2.png","sprites/3.png","sprites/4.png","sprites/5.png")
rockImg = loadImage("sprites/rock.png")
birdImg = loadImage("sprites/bird.png")
backgroundImg = loadImage("sprites/BG.png")
groundImg = loadImage("sprites/ground.webp")


}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

    invisibleGround = createSprite(400,873,900,100)
	invisibleGround.scale = 1.8
	invisibleGround.x = invisibleGround.width/2
	invisibleGround.visible = true 

	
    elephant = createSprite(500,800,50,50)
	elephant.scale = 1.25
 	 
	rockGroup = new Group()
    birdGroup = new Group	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  
 invisibleGround.velocityX = -1
 
 background.velocityX = -1


 if(keyDown("space") ) {
	elephant.velocityY = -18;
  }
  elephant.velocityY = elephant.velocityY + 0.8;
    
 if(invisibleGround.x < 480){
	 invisibleGround.x = invisibleGround.width/2
 }
 
  
   elephant.addAnimation("elephant",elephantImg)
 elephant.collide(invisibleGround)
 
 invisibleGround.addImage('ground', groundImg)
 score = score + Math.round(getFrameRate()/60)
 
 fill("black")
 textSize(20)
 text("Score: "+ score, 500,50)

if (elephant.isTouching(rockGroup)){
	textSize(50)
	fill("black")
	text("Game Over",500,350)
	invisibleGround.velocityX = 0
rock.velocityX = 0
bird.velocityX = 0
bird.visible = false
rock.visible = false


}

drawSprites()
 spawnRock()
 spawnBird()

 
}

function spawnRock(){
if(frameCount % 300 === 0){
	
 rock = createSprite(800,580,10,40)
 rock.addImage("rock", rockImg)
 rock.scale = 0.050
 rock.velocityX = -6
 rock.lifetime = 180
rockGroup.add(rock)
} 

}

function spawnBird(){
if(frameCount % 380 === 0){
	bird = createSprite(800, 280, 10,40)
	bird.addImage("bird", birdImg)
	bird.scale = 0.25
	bird.velocityX = -6 
}
}