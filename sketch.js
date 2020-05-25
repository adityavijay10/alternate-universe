var sun,planet1,planet2,planet3,sunImage,planet1Image,planet2Image,planet3Image;
function preload(){
 sunImage=loadImage("sun.png");
 planet1Image=loadImage("earth.png");
 planet2Image=loadImage("mercury.png");
 planet3Image=loadImage("planet1.png");
}
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  sun =createSprite(400,200,60,60);
  sun.addImage(sunImage);
  
  planet1=createSprite(500,300,20,20);
  planet1.addImage(planet1Image);
  planet2=createSprite(300,300,20,20);
  planet2.addImage(planet2Image);
  planet3=createSprite(500,150,20,20);
  planet3.addImage(planet3Image);

}

function draw() {
  background("black");
 sun.scale=0.1;
  planet1.scale=0.1;
  planet2.scale=0.1;
  planet3.scale=0.1;

 planet1.velocity.x=-0.15;
 planet1.velocity.y=-0.15;
 if (planet1.collide(sun)){
  sun.scale=0.2;
planet1.destroy();  
 }

 planet3.velocity.x=-0.1;
 planet3.velocity.y=0.1;
 if(planet3.collide(sun)){
  sun.scale=0.2;
  planet3.destroy();
 
 }
 planet2.velocity.x=0.1;
 planet2.velocity.y=-0.1;
 if(planet2.collide(sun)){
  sun.scale=1;
  planet2.velocity=0;
  planet2.visible=false;
 }
 
  drawSprites();
}