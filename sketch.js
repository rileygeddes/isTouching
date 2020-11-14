var fr,mr
var s1,s2

function setup() {
  createCanvas(800,400);
  fr=createSprite(200,200,80,50)
  fr.shapeColor="red"
  mr=createSprite(800,400,80,50)
  mr.shapeColor="red"
  s1=createSprite(290,130,30,30)
  s1.shapeColor="green"
  s2=createSprite(140,220,30,30)
  s2.shapeColor="yellow"
  
}

function draw() {
  background("black");  
  
  s1.x=World.mouseX
  s1.y=World.mouseY

  if(isTouching(s1,s2)){
    s1.shapeColor="blue"
    s2.shapeColor="blue"
  }
  else{
    s1.shapeColor="green"
    s2.shapeColor="yellow"
  }

  drawSprites();
}
