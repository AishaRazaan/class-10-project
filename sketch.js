var ship, ship_moving;
var sea, sea_image ;
function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_image = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200,20,30);
  sea.addImage(sea_image);
  sea.scale=0.25;
  ship = createSprite(110,170,5,6);
  ship.addAnimation("boat",ship_moving);
  ship.scale=0.25;


}

function draw() {
  background("blue");
 drawSprites();
sea.velocityX=-3;
 if(sea.x<0){
   sea.x=sea.width/8;
  //sea.x=90
 }
}