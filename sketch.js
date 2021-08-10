var girl, ground;
var zombie;
var invisibleGround,zombieHolder;
var bulbGroup,knifeGroup;
var girlAnimation;
var lives=3;
var score=0;
var gameState="play";

function preload(){
    groundImage=loadImage("images/skyline.png")
    knifeImage=loadImage("images/knifeImage.png")
    bulbImage=loadImage("images/bulbImage.png")
    zombieImage=loadImage("images/zombieImage.png")
    girlAnimation=loadAnimation("images/girl1.png","images/girl2.png")
    sad=loadImage("images/sad.png")
}

function setup(){
    createCanvas(800,600)
    ground=createSprite(400,360,2000,2.7);
    ground.addImage(groundImage)
    //ground.scale=0.5;
    ground.x=ground.width/2
    girl=createSprite(370,585,10,30);
    girl.addAnimation("running",girlAnimation)
    girl.scale=0.3
    zombie=createSprite(85,500,30,10)
    zombie.addImage(zombieImage)
    zombie.scale=0.3
    zombie.mirrorX(-1)
    invisibleGround=createSprite(370,590,100,10)
    invisibleGround.visible=false;
    bulbGroup=new Group();
    knifeGroup=new Group();
    emoji=createSprite(90,15,10,10)
    emoji.visible=false;
}

function draw(){
    background("black");
    
    textSize(24);
    text("score : ",10,20)
    text("lives : "+lives,700,20)
  

if(gameState!="end"){
    ground.velocityX=5;
  
    if(ground.x>ground.width/2){
        ground.x=0;
    }
if(keyDown("space")){
    girl.velocityY=-10;
}
spawnBulb();
spawnKnife();
if(girl.isTouching(bulbGroup)){
    bulbGroup.destroyEach();
    score=score+1 //score+=1

}
if(score<5&&score>1){
emoji.visible=true;
emoji.addImage(sad)
emoji.scale=0.05
}
//add is touching for knife group
if(girl.isTouching(knifeGroup)){
    knifeGroup.destroyEach();
    score=score-1 
    if(lives>0){
        lives=lives-1
    }
    else{
        lives=lives-1
       ground.velocityX=0;
       bulbGroup.destroyEach();
       knifeGroup.destroyEach();
       textSize(30);
       text("GAME OVER",400,300)
       gameState="end"
    }
}
girl.velocityY=girl.velocityY+0.5
}
girl.collide(invisibleGround);
    drawSprites();
}
function spawnBulb(){
    if(frameCount%100==0){
        var rand=Math.round(random(100,200))
        var bulb=createSprite(800,rand,20,20)
        bulb.addImage(bulbImage)
        bulb.scale=0.08
        bulb.velocityX=-5;
        bulbGroup.add(bulb)
    }
   
}
function spawnKnife(){
    if(frameCount%150==0){
        var rand=Math.round(random(540,580))
        var knife=createSprite(800,rand,20,20)
        knife.addImage(knifeImage)
        knife.scale=0.02;
        knife.velocityX=-5;
        knifeGroup.add(knife)
    }
   
}