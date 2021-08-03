var sea 
var ship, shipsailing


function preload(){
seaimage = loadImage("sea.png")
shipsailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200)
  sea.addImage(seaimage)
  sea.scale = 0.3
  sea.velocityX = -5

  ship = createSprite(130,200,30,30)
  ship.addAnimation("moving",shipsailing)
  ship.scale = 0.2
}

function draw() {
  background("blue");
  sea.velocityX = -5
  if(sea.x < 0 ){
    sea.x = sea.width/8
  }
  drawSprites()
}