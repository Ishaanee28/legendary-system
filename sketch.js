var girl, ground;
var zombie;
var invisibleGround,zombieHolder;

function preload(){
    groundImage=loadImage("images/skyline.png")

}

function setup(){
    createCanvas(800,600)
    ground=createSprite(400,500,2000,2.7);
    ground.addImage(groundImage)
    //ground.scale=0.5;
    ground.x=ground.width/2
    girl=createSprite(370,500,10,30);
    zombie=createSprite(120,500,30,10)
    zombieHolder=createSprite(120,530,30,20)
    zombieHolder.shapeColor="yellow";
    invisibleGround=createSprite(370,530,30,10)
}

function draw(){
    background("black");
    ground.velocityX=5;
if(ground.x>ground.width/2){
    ground.x=0;
}
if(keyDown("space")){
    girl.velocityY=-30;
}
girl.velocityY=girl.velocityY+0.5
girl.collide(invisibleGround);
    drawSprites();
}