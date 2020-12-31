var bullet,wall;

var thickness;

var speed,weight;




function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 10, 10);

  bullet.shapeColor = "white";

  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);

  wall.shapeColor(80,80,80);

  speed = random(223,321);

  weight = random(30,52);

  thicknes = random(22,83);

  
}

function draw() {
  background(255,255,255);  

 if(hasCollided(bullet,wall)){

   bullet.velocityX = 0;

   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thhickness);

      if(damage>10){

        wall.shapeColor = (255,0,0);

      }

      if(damage<10){

        wall.shapeColor = (0,255,0);

      }
 }
  drawSprites();
}

function hasCollided(bullet,wall){

  bulletRighEdge = 1*bullet.x + 1*bullet.width;

  wallLeftEdge = 1*wall.x;

    if(bulletRightEdge>=wallLeftEdge){

      return true;
    }
      return false;
}