
var monkey , monkeyrunning,run;
var banana ,bananaImage, obs, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0 ;
var ground;
 
 

function preload(){
  
 monkeyrunning=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}

function setup() {
 
  createCanvas(500,500);
  
  monkey = createSprite(100,350,20,20);
  monkey.addAnimation("run",monkeyrunning);
  monkey.scale = 0.1;
  
  ground = createSprite(250,410,1000,10);
  ground.velocityX = -4;
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
}


function draw() {
background("white");
  
  text(mouseX+","+mouseY,mouseX,mouseY);
  text("Score: "+ score, 410,50);
  
  
   
   
    if(monkey.isTouching(FoodGroup)){
    score = score +2;
    FoodGroup.destroyEach();
  }
  
      monkey.collide(ground);
monkey.velocityY = monkey.velocityY +0.5
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    
    monkey.velocityY = -7
    
  }
  
  if(monkey.isTouching(obstacleGroup)){
    
    FoodGroup.destroyEach();
    obstacleGroup.destroyEach();
    FoodGroup.setvelocityEach = 0;
    obstacleGroup.setvelocityEach = 0 ;
    score = 0;
  }
  
   food();
   ob();
  
  drawSprites();
  
  
   }
  
 
  
  
  
   
  


function food(){
  
  if (frameCount % 100 === 0) {
  banana = createSprite(500,300,20,20);
  banana.y = Math.round(random(100,250));
  banana.velocityX = -5;
  banana.addImage(bananaImage);
  banana.scale = 0.1
    
    FoodGroup.add(banana);
    
  }
  
}

function ob(){
  
  if(frameCount % 150 === 0 ){
    
   obs = createSprite(480,385,20,20);
   obs.velocityX = -5;
   obs.addImage(obstacleImage);
   obs.scale = 0.1;
    
    obstacleGroup.add(obs);
     }
}

 
