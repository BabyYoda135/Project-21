//creating variables
var wall, thickness;
var bullet, speed, weight

function setup() {
  //creating everything else and assigning variable values
  createCanvas(1600,400);
  thickness=random(22, 83)
  bullet=createSprite(50, 200, 30, 20)
  wall=createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color(80, 80, 80)
  speed=random(223, 321)
  weight=random(30, 52)
  bullet.velocityX = speed;
}


function draw() {
  background(0,0,0);  
  //checking if the wall is good or not
  if(wall.x-bullet.x < (wall.width+bullet.width)/2)
  {
    bullet.velocityX=0;
    bullet.x = bullet.x - thickness/5
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10){
      wall.shapeColor = color(255, 0, 0)
    }

    if(damage<10){
      wall.shapeColor = color(0, 255, 0)
    }
  }
  drawSprites();
}