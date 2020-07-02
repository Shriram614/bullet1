var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

bullet =  createSprite(50, 200, 10, 5);
wall =createSprite(1500,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

  thickness =random(22,83);
  speed =random(223,321);
  weight=random(30,52);

  bullet. velocityX=speed;
}

function draw() {
  background(255,255,255); 
 bullet.collide(wall);

  if (hasCollided(bullet,wall)) {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness)


    if (damage >10) {
      wall.shapeColor = color(225,0,0);
    }


  if (damage<10) {
    
    wall.shapeColor=color(0,225,0);
    
  }

  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return  true  
  }
return  false;
}