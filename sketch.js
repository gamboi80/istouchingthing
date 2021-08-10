var FixRect, MovingRect
var car, wall
var vodka, scotch;
var ob1, ob2, ob3;
 
function setup() {
  createCanvas(800,400);
  
  FixRect = createSprite(200,200,50,50);
  FixRect.shapeColor="red"
  MovingRect = createSprite(400,200,80,80);
  MovingRect.shapeColor="red"
 
  car = createSprite(100,100,50,50);
  car.shapeColor = "blue";
  wall = createSprite(300,200,80,80);
  wall.shapeColor = "green";

  vodka = createSprite(300,300,50,50);
  vodka.shapeColor = "brown";
  scotch = createSprite(100,300,50,50);

  ob1 = createSprite(200,300,50,50);
  ob2 = createSprite(300,300,50,50);
  ob3 = createSprite(400,300,50,50);
  MovingRect.visible=false;
  FixRect.visible=false;
  car.visible=false;
  wall.visible=false;
 
 
}
 
function draw() {
  background(255,255,255);
 
  console.log(MovingRect.y-FixRect.y);
  if(keyDown(LEFT_ARROW)){
    vodka.x=vodka.x-3;
  }
  if(keyDown(RIGHT_ARROW)){
    vodka.x=vodka.x+3;
  }
  if(keyDown(UP_ARROW)){
    vodka.y=vodka.y-3;2
  }
  if(keyDown(DOWN_ARROW)){
    vodka.y=vodka.y+3;
  }
 
 
 
if(isTouching(vodka, scotch)){
  vodka.shapeColor = "purple";
  scotch.shapeColor = "yellow";
}else{
  vodka.shapeColor = "pink";
  scotch.shapeColor = "green";
}
if(isTouching(vodka, ob1)){
  vodka.shapeColor = "purple";
  ob1.shapeColor = "blue";
}else{
  vodka.shapeColor = "pink";
  ob1.shapeColor = "red";
}
if(isTouching(vodka, ob2)){
  vodka.shapeColor = "purple";
  ob2.shapeColor = "black";
}else{
  vodka.shapeColor = "pink";
  ob2.shapeColor = "orange";
}
if(isTouching(vodka, ob3)){
  vodka.shapeColor = "purple";
  ob3.shapeColor = "silver";
}else{
  vodka.shapeColor = "pink";
  ob3.shapeColor = "brown";
}
  drawSprites();
}



 
