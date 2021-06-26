var bgImg;
var cat1, cat2, cat3, cat, mouse1, mouse2, mouse3, mouse;
var tom, jerry;



function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png");
    cat3 = loadAnimation("images/cat3.png");
    cat = loadAnimation("images/cat4.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png");
    mouse3 = loadAnimation("images/mouse3.png");
    mouse = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(900,800);
    //create tom and jerry sprites here
    tom=createSprite(800,600);
    tom.addAnimation("tomsleeping",cat1);
    tom.scale=0.2;
    //jerry=createSprite()
    jerry=createSprite(200,600);
    jerry.addAnimation("jerry", mouse1);
    jerry.scale=0.1;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry < (tom.width - jerry.width)/2){

        tom.velocityX=0;
        tom.addAnimation("tomLastImage", cat3);
        tom.x = 300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage")
        jerry.addAnimation("jerrylastImage", mouse3);
        jerry.scale=0.2;
        jerry.changeAnimation("jerryLastImage");
    }

    drawSprites();
}


function keyPressed(){
//jerry.frameDelay=20
  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.x=tom.x - 20;
    tom.addAnimation("tomRunning",cat2);
    tom.changeAnimation("tomRunning");

    jerry.addAnimation("jerryTeasing", mouse2);
    jerry.changeAnimation("jerryTeasing");



}

}
