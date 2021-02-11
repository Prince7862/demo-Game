var gameState = 0;
var score = 0;
var font;
var run,run2
var runner1,runner2;
var player;
var virus1,virus2,virus3,virus4;
var virus1Img,virus2Img,virus3Img,virus4Img
var button,text,text1
var block1,block2,block3,block4,
block5,block6,block7,block8,block9,
block10,block11,block12,block13,block14,
block15,block16,block17,block18,block19,block20,
block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31;
var canvas,virusGroup,blockGroup

function preload(){
font = loadFont("lailaland-font/Laillaland-BWG25.ttf");
runner1 = loadAnimation("Boyrun/run1.gif","Boyrun/run2.gif","Boyrun/run3.gif","Boyrun/run4.gif","Boyrun/run5.gif","Boyrun/run6.gif","Boyrun/run7.gif","Boyrun/run8.gif","Boyrun/run9.gif","Boyrun/run10.gif","Boyrun/run11.gif","Boyrun/run12.gif");
runner2 = loadAnimation("Girlrun/Grun1.gif","Girlrun/Grun2.gif","Girlrun/Grun3.gif","Girlrun/Grun4.gif","Girlrun/Grun5.gif","Girlrun/Grun6.gif","Girlrun/Grun7.gif","Girlrun/Grun8.gif","Girlrun/Grun9.gif","Girlrun/Grun10.gif","Girlrun/Grun11.gif","Girlrun/Grun12.gif","Girlrun/Grun13.gif","Girlrun/Grun14.gif","Girlrun/Grun15.gif");
virus1Img = loadImage("Images/virus1.png");
virus2Img = loadImage("Images/virus2.png");
virus3Img = loadImage("Images/virus3.png");
virus4Img = loadImage("Images/virus4.png");
backgroundImg = loadImage("Images/background.png");
}

function setup() {
 canvas = createCanvas(1200,800);
 virusGroup = new Group();
 blockGroup = new Group();
  /*background1 = createSprite(600,400,1200,800);
  background1.addImage(backgroundImg);
  background1.visible = false;*/
  text1 = createElement("h2");
  text1.html("Choose The Character You Want to Play As.")
  text1.position(600,400);
  text2 = createElement("h2");
  text2.html("Press START to Start Playing");
  text2.position(600,400);
  button = createButton("START");
  
  text1.hide();
  text2.hide();

 player = createSprite(700,400,0.1,0.1);
 player.frameDelay = 0.05;
 

run = createSprite(500,600,20,20);
  run.addAnimation("Animation 1",runner1);
  run.scale = 0.8;
  run.frameDelay = 0.5;

run2 = createSprite(900,600,20,20);
  run2.addAnimation("Animation 2",runner2);
run2.frameDelay = 0.5;

virus1 = createSprite(525,378,10,10)
  virus1.addImage(virus1Img);
  virus1.scale = 0.2
  virus2 = createSprite(575,378,10,10);
  virus2.addImage(virus2Img);
  virus2.scale = 0.2;
  virus3 = createSprite(625,370,10,10);
  virus3.addImage(virus3Img);
  virus3.scale = 0.3
  virus4 = createSprite(675,378,10,10);
  virus4.addImage(virus4Img);
  virus4.scale = 0.2
  block1 = createSprite(600,180,275,10)
  block1.shapeColor = rgb(0,0,153);
  block2 = createSprite(600,218,20,87);
  block2.shapeColor = rgb(0,0,153);
  block3 = createSprite(857,256,15,166);
  block3.shapeColor = rgb(0,0,153);
  block4 = createSprite(784,258,134,10);
  block4.shapeColor = rgb(0,0,153);
  block5 = createSprite(344,256,15,166);
  block5.shapeColor = rgb(0,0,153);
  block6 = createSprite(410,259,135,10);
  block6.shapeColor = rgb(0,0,153);
  block7 = createSprite(600,40,20,140);
  block7.shapeColor = rgb(0,0,153);
  block8 = createSprite(344,449,15,92);
  block8.shapeColor = rgb(0,0,153);
  block9 = createSprite(855,450,15,90);
  block9.shapeColor = rgb(0,0,153);
  block10 = createSprite(600,490,275,10);
  block10.shapeColor = rgb(0,0,153);
  block11 = createSprite(600,531,20,80);
  block11.shapeColor = rgb(0,0,153);
  block12 = createSprite(175,90,100,30);
  block12.shapeColor = rgb(0,0,153);
  block13 = createSprite(400,95,150,40);
  block13.shapeColor = rgb(0,0,153);
  block14 = createSprite(780,95,150,40);
  block14.shapeColor = rgb(0,0,153);
  
  virusGroup.add(virus1,virus2,virus3,virus4);
  virusGroup.setVisibleEach(false);

  blockGroup.add(block1,block2,block3,block4,
    block5,block6,block7,block8,block9,
    block10,block11,block12,block13,block14,
    block15,block16,block17,block18,block19,block20,
    block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31);
    blockGroup.setVisibleEach(false);
}

function draw() {
  if(gameState == 0){
    virusGroup.setVisibleEach(false);
    blockGroup.setVisibleEach(false);
    
  
  background(0);
  textSize(28);
  fill("Red");
  textFont(font);
  //text("Choose The Character You Want to Play As.",displayWidth/2-170,displayHeight/2-80);

  if(mousePressedOver(run)){
    player.addAnimation("Animation 1",runner1);
    player.scale = 0.8;
    run.visible = false;
    run2.visible = false;
    text1.hide();
    text2.hide();
    button.position(660,600);
  }
  else if(mousePressedOver(run2)){
    player.addAnimation("Animation 2", runner2);
    //player.frameDelay = 1;
    run.visible = false;
    run2.visible = false;
    text1.hide();
    text2.hide();
    button.position(700,600);
  }
button.mousePressed(function(){
  gameState = 1;
}
  );
}
  else if(gameState == 1){
    start();
    
  }
  drawSprites();
  fill("red");
  //textSize(20);
  text(mouseX + " , " + mouseY, mouseX,mouseY);
}
function start(){
  textFont(font);
  background(backgroundImg);
  button.hide();
  player.scale = 0.2
  player.x = 65
  player.y = 65
  virusGroup.setVisibleEach(true);
  blockGroup.setVisibleEach(true);
  
  /*
  block15.shapeColor = rgb(0,0,153);
  block16.shapeColor = rgb(0,0,153);
  block17.shapeColor = rgb(0,0,153);
  block18.shapeColor = rgb(0,0,153);
  block19.shapeColor = rgb(0,0,153);
  block20.shapeColor = rgb(0,0,153);
  block21.shapeColor = rgb(0,0,153);
  block22.shapeColor = rgb(0,0,153);
  block23.shapeColor = rgb(0,0,153);
  block24.shapeColor = rgb(0,0,153);
  block25.shapeColor = rgb(0,0,153);
  block26.shapeColor = rgb(0,0,153);
  block27.shapeColor = rgb(0,0,153);
  block28.shapeColor = rgb(0,0,153);
  block29.shapeColor = rgb(0,0,153);
  block30.shapeColor = rgb(0,0,153);
  block31.shapeColor = rgb(0,0,153);
  */
}