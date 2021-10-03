function preload(){
bg=loadImage("background.jpg")
heliImg=loadImage("helicopter.png")
build1=loadImage("building1.png")
build2=loadImage("building2.png")
build3=loadImage("building3.png")
object1=loadImage("object1.png")
object2=loadImage("object2.png")
object3=loadImage("object3.png")
}
function setup() {
  createCanvas(1365,575);
  player=createSprite(400, 250, 50, 50);
  player.addImage("player",heliImg);
  player.scale=0.125; 
  
}

function draw() {
  background(bg);  
  if(keyDown("up")){
    player.y=player.y-4
  }
  if(keyDown("down")){
    player.y=player.y+4
  }
spawnObstacle()
spawnSkyObstacle()
  
  drawSprites();
}
function spawnObstacle(){
if(frameCount%50===0){
  var building=createSprite(1365,400,100,100) 
  var obj=Math.round(random(1,3))
  building.velocityX=-10
  if(obj===1){
    building.addImage(build1)
    building.scale=0.7
  }
  if(obj===2){
    building.addImage(build2)
    building.scale=0.92
  }
  if(obj===3){
    building.addImage(build3)
    building.scale=1.2
  }

  
}

} 
function spawnSkyObstacle(){
  if(frameCount%100===0){
  var object=createSprite(1400,100,100,100)
  var obj2=Math.round(random(1,3))
  object.velocityX=-10
  if(obj2===1){
object.addImage(object1)
object.scale=0.5
    }
if(obj2===2){
object.addImage(object2)
object.scale=0.2
          }
if(obj2===3){
object.addImage(object3)
object.scale=0.2
                }
                    
}
}