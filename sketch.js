var fixedRect, movingRect;
var rect1,rect2,rect3,rect4;
var rect5;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(200,100,50,50);
 rect2 = createSprite(300,100,20,50);
 rect3 = createSprite(400,100,50,20);
 rect4 = createSprite(500,100,55,22);
 rect5 = createSprite(1200,100,40,40);
 rect5.velocityX = -10
 rect5.velocityY = 0
 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(rect1,movingRect)){
    movingRect.shapeColor = "blue";
    rect1.shapeColor = "magenta";

  }
  else {
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";

   
  }
  
  if(isTouching(rect2,movingRect)){
    movingRect.shapeColor = "blue";
    rect2.shapeColor = "magenta";
  }
  else {
    movingRect.shapeColor = "green";
    rect2.shapeColor = "green";
  }

  if(isTouching(rect3,movingRect)){
    movingRect.shapeColor = "blue";
    rect3.shapeColor = "white"
  }else{
    movingRect.shapeColor = "green";
    rect3.shapeColor = "green"
  }
  
  bounceOf(rect4,rect5)
  bounceOf(rect5,movingRect)

 if(isTouching(rect4,rect5)){
   rect4.shapeColor = "red"
   rect5.shapeColor = "yellow"
 }
 

 

  drawSprites();
}

