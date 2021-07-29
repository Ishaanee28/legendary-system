var girl, ground;

function setup(){
    createCanvas(1000,600)
    ground=createSprite(500,570,2000,2.7);
    girl=createSprite(280,555,30,30);

}

function draw(){
    background("black");
    ground.velocityX=5;
if(ground.x>1000){
    ground.x=ground.width/2;
}
if(keyDown("space")){
    girl.velocityY=-30;
}
girl.velocityY=girl.velocityY+0.5
girl.collide(ground);
    drawSprites();
}