const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var particle
var wall1
var particles = [];
var plinkos = [];
var score = 0
var count = 0
var gameState = "start"

// display text, create agorithim for score, create gamestates

function setup() {

  var myCanvas = createCanvas(480,800);
  noStroke();
  textSize(35)
  fill("white")
  //text("Score  " + score, width-300, 50)
  text("Score: " + count, 0, 450);
    
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push( new Plinko(j, 75, 10));
  }

  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175, 10));
  }

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(250, 795, 500, 20, options)
  World.add(world, ground)

  var options1 = {
    isStatic : true
  }

  wall1 = Bodies.rectangle(5, 590, 10, 400, options1)
  World.add(world, wall1)

  var options2 = {
    isStatic : true
  }
  wall2 = Bodies.rectangle(80, 590, 10, 400, options2)
  World.add(world, wall2)

  var options3 = {
    isStatic : true
  }
  wall3 = Bodies.rectangle(160, 590, 10, 400, options3)
  World.add(world, wall3)

  var options4 = {
    isStatic : true
  }
  wall4 = Bodies.rectangle(240, 590, 10, 400, options4)
  World.add(world, wall4)

  var options5 = {
    isStatic : true
  }
  wall5 = Bodies.rectangle(320, 590, 10, 400, options5)
  World.add(world, wall5)

  var options6 = {
    isStatic : true
  }
  wall6 = Bodies.rectangle(400, 590, 10, 400, options6)
  World.add(world, wall6)

  var options7 = {
    isStatic : true
  }
  wall7 = Bodies.rectangle(475, 590, 10, 400, options7)
  World.add(world, wall7)

  Engine.run(engine);

}

function draw() {
  background(0,0,0);
  rectMode(CENTER)  
  Engine.update(engine)

  if(gameState === "start"){

    console.log("1")
  }
  text("Score: " + score, 30, 30)
  //ground Rect
  rect(250, 795, 500, 10)

  //wall1 Rect
  rect(5, 590, 10, 400)

  //wall2 Rect
  rect(80, 590, 10, 400)

  //wall3 Rect
  rect(160, 590, 10, 400)

  //wall4 Rect
  rect(240, 590, 10, 400)

  //wall5 Rect
  rect(320, 590, 10, 400)

  //wall6 Rect
  rect(400, 590, 10, 400)

  //wall7 Rect
  rect(475, 590, 10, 400)

  for (var i = 0; i < plinkos.length; i++){

    plinkos[i].display()

  }

  //if(particle!=null){

    particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x < 300){

        score = score + 500;
        particle = null;
        if(count >= 5) gameState = "end";
      }
      else if(particle.body.position.x < 600 && particle.body.position.x > 301){

        score = score + 100;
        particle = null;
        if(count >= 5) gameState = "end";

      }
      else if(particle.body.position.x < 900 && particle.body.position.x > 601){

        score = score + 200;
        particle = null;
        if(count >= 5) gameState = "end";
      }
    }
  //}

  drawSprites();
}

function mousePressed(){

  if(gameState !== "end"){

    particle = new Particle(mouseX, 10, 10)
    count++
    console.log("pressed")

  }
}