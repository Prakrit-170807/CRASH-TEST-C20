var car 
var Test_wall
var GameMode

function setup() {
  createCanvas(800,800);
  car = createSprite(100,400,100,50)
  car.shapeColor = "Gray"

  Test_wall = createSprite(750,400,50,800)
  Test_wall.shapeColor = "Yellow"

  GameMode="Car1"
}

function draw() {
  background(0);
  car.velocityX=4
  if(GameMode=="Car1"){
    if(car.x - Test_wall.x <= Test_wall.width/2 + car.width/2  &&  
      Test_wall.x - car.x <= Test_wall.width/2 + car.width/2  &&
      car.y - Test_wall.y <= Test_wall.height/2 + car.height/2  &&  
      Test_wall.y - car.y <= Test_wall.height/2 + car.height/2){

      car.velocityX=-10
      car.velocityX=0
      car.shapeColor='red'
      text("TEST HAS BEEN DONE YOU ARE WAS RATED D-", 200, 300)
      text("PLEASE PRESS SPACE TO TEST NEXT CAR", 200, 320)
      if(keyWentDown('Space')){
        GameMode='Car2'
        car.x=100
        car.shapeColor='Gray'
      }
    }
  }
  if(GameMode=='Car2'){
    if(car.x - Test_wall.x <= Test_wall.width/2 + car.width/2  &&  
      Test_wall.x - car.x <= Test_wall.width/2 + car.width/2  &&
      car.y - Test_wall.y <= Test_wall.height/2 + car.height/2  &&  
      Test_wall.y - car.y <= Test_wall.height/2 + car.height/2){

      car.velocityX=-10
      car.velocityX=0
      car.shapeColor='Green'
      text("TEST HAS BEEN DONE YOU ARE WAS RATED A-", 200, 300)
      text("PLEASE PRESS SPACE TO TEST NEXT CAR", 200, 320)
      if(keyWentDown('Space')){
        GameMode='Car3'
        car.x=100
        car.shapeColor='Gray'
      }
    }
  } 
  if(GameMode=='Car3'){
    if(car.x - Test_wall.x <= Test_wall.width/2 + car.width/2  &&  
      Test_wall.x - car.x <= Test_wall.width/2 + car.width/2  &&
      car.y - Test_wall.y <= Test_wall.height/2 + car.height/2  &&  
      Test_wall.y - car.y <= Test_wall.height/2 + car.height/2){

      car.velocityX=-10
      car.velocityX=0
      car.shapeColor='orange'
      text("TEST HAS BEEN DONE YOU ARE WAS RATED C", 200, 300)
      text("PLEASE PRESS SPACE TO TEST NEXT CAR", 200, 320)
    }
  }
  drawSprites()
}