var bullet , wall , speed , weight , damage, thick

function setup() {
  createCanvas(1600,400);
  
 

  speed= random(55,90)
  weight= random(400,1500)
  thick= random(22,83)

  bullet = createSprite(20,200, 10,10)
  wall= createSprite(780,200,thick,100)

  wall.shapeColor= ("green")
  bullet.shapeColor= color(255,255,255)

  bullet.velocityX= speed
  
}

function draw() {
  background(0,0,0);
  if (has_collided(bullet,wall)){
    bullet.velocityX=0
    damage= (0.5*weight*speed*speed)/(thick *thick*thick)
    if (damage< 10){
      wall.shapeColor= ("green")
    }
    
    else{
      wall .shapeColor= ("red")
  }

  }
  drawSprites();
}
function has_collided(bullet,wall){
  if (bullet.x+15  > wall.x-10){
    return true
  }
  else {
    return false 
  }
}