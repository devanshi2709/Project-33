var Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
  Bodies = Matter.Bodies;

var particle
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var score =0;
var turn = 0;

var gameState= start;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   
  if(gameState==="start"){

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

  }
    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("Turn : "+turn,700,30);

  text("500 ",25,500);
  text("500 ",105,500);
  text("500 ",185,500);
  text("500 ",265,500);

  text("100 ",345,500);
  text("100 ",425,500);
  text("100 ",505,500);

  text("200 ",585,500);
  text("200 ",665,500);
  text("200 ",745,500);
  text("200 ",825,500);

  stroke("yellow");
  line(0,450,800,450)

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));

     if(particle!=null){

      particle.display();
  
      if(particle.body.position.y>700){
  
        if(particle.body.position.x<300){
  
          score+=500;
          particle=null;
  
          if(turn>=5){

            gameState="end";
          }
          
        }
      }
  
     }


     if(particle!=null){

      particle.display();
  
      if(particle.body.position.y<600){
  
        if(particle.body.position.x>301){
  
          score+=100;
          particle=null;
  
          if(turn>=5){

            gameState="end";
          }
        }
      }
  
     }

     if(particle!=null){

      particle.display();
  
      if(particle.body.position.y<900){
  
        if(particle.body.position.x>601){
  
          score+=200;
          particle=null;
  
          if(turn>= 5){

            gameState="end";
          }
        }
      }
  
     }
     //score++;
   }
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   
   

}

function mousePressed(){

  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  
  if(gameState!=="end"){

    turn++;

    particle= new Particle(mouseX,10,10,10);

  }


}