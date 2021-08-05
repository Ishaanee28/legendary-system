var girl, ground;
var zombie;
var invisibleGround,zombieHolder;
var bulbGroup,knifeGroup;
var score=0;

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
    zombie=createSprite(50,500,30,10)
    invisibleGround=createSprite(370,530,30,10)
    bulbGroup=new Group();
    knifeGroup=new Group();
}

function draw(){
    background("black");
    textSize(24);
    text("score : "+score,10,20)
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
girl.velocityY=girl.velocityY+0.5
girl.collide(invisibleGround);
    drawSprites();
}
function spawnBulb(){
    if(frameCount%100==0){
        var rand=Math.round(random(200,400))
        var bulb=createSprite(800,rand,20,20)
        bulb.velocityX=-5;
        bulbGroup.add(bulb)
    }
   
}
function spawnKnife(){
    if(frameCount%100==0){
        var rand=Math.round(random(550,750))
        var knife=createSprite(800,rand,20,20)
        knife.velocityX=-5;
        knifeGroup.add(knife)
    }
   
}