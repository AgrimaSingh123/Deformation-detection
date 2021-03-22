var car,wall;

var speed,weight;

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor=color("white");

  wall=createSprite(780,height/2,50,height);
  wall.shapeColor=color(rgb(153, 0, 0));

  weight=random(400,1500);
  speed=random(55,90);
}

function draw() {
  background("black");  

  
  car.velocityX=speed;

  if(car.x-wall.x<car.width/2+wall.width/2&&wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;

    var deformation=0.5*weight*speed*speed/22500;

    if(deformation<100){
      car.shapeColor=color(0, 255, 0);
      text("This is a lethal accident",50,height-50);
    }
    if(100<deformation&&deformation<180){
      car.shapeColor=color(230, 230, 0);
      text("This is an average accident",50,height-50);
    }
    if(deformation>180){
      car.shapeColor=color(255, 0, 0);
      text("This is a not a serious accident",50,height-50);
    }
  }

  drawSprites();
}