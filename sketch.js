const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body;

var engine, world;
var box1,box2,box3,box4,box5;
var ground,ground1,ground2;
var sling;
var polygon;
var score=0;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1=new Box(330,275,30,40);
    box2=new Box(360,275,30,40);
    box3=new Box(390,275,30,40);
    box4=new Box(420,275,30,40);
    box5=new Box(450,275,30,40);
    box6=new Box(360,235,30,40);
    box7=new Box(390,235,30,40);
    box8=new Box(420,235,30,40);
    box9=new Box(390,205,30,40);

    box10=new Box(890,195,30,40);
    box11=new Box(920,195,30,40);
    box12=new Box(950,195,30,40);
    box13=new Box(980,195,30,40);
    box14=new Box(1010,195,30,40);
    box15=new Box(920,145,30,40);
     box16=new Box(950,145,30,40);
     box17=new Box(980,145,30,40);
    box18=new Box(950,90,30,40);
    ground1=new Ground(390,300,250,10);
    ground=new Ground(600,390,1200,10);
    ground2=new Ground(950,200,250,10);
    polygon=new Polygon(100,280);
    sling=new SlingShot(polygon.body,{x:100,y:200});

    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    
    box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display(); 
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
      box15.display();
     box16.display(); 
       box17.display();
      box18.display();
      box1.score();
     box2.score();
     box3.score();
     box4.score();
     box5.score();
     box6.score();
     box7.score();
     box8.score();
     box9.score();
     box10.score();
     box11.score();
     box12.score();
     box13.score();
     box14.score();
      box15.score();
     box16.score(); 
       box17.score();
      box18.score();

     ground.display(); 
    ground1.display();
    ground2.display(); 
    polygon.display();
     sling.display();
     textSize(30);
     //stroke("white");
    //fill("white");
    strokeWeight(4);
     text("Score:"+score,1000,30);
    
    
}
function mouseDragged(){
  Body.setPosition(polygon.body,{x:mouseX,y:mouseY});  
}
function mouseReleased(){
   sling.fly();
}
function keyPressed(){
    if(keyCode===32){
        sling.attach(polygon.body);
    }
}