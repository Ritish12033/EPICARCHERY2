const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;

   //Create Player Base and Computer Base Object
   computerbase = new ComputerBase(
     1100,
     random(450,height-380),
     180,
     150
     );

   computerplayer = new ComputerPlayer(
     1095,
     computerbase.body.position.y-145,
     50,
     180
     );

     //creating computerArcher Object
    computerArcher = new ComputerArcher(
    width - 320,
    computerbase.body.position.y - 180,
    120,
    120
    );

   playerbase = new PlayerBase(
     300,
     random(450,height-300),
     180,
     150
     );

   player = new Player(
     305,
     playerbase.body.position.y-145,
     50,
     180
     );

     //creating playerArcher Object
   playerArcher = new PlayerArcher(
    width - 1010,
    playerbase.body.position.y - 185,
    120,
    120
  );
  
     arrow = new PlayerArrow(
       385,
       playerbase.body.position.y-184.5,
       100,
       10
     );

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerbase.display();
   playerbase.display();

   //display Player and computerplayer
   computerplayer.display();
   player.display();

   //display player and computer archer
   playerArcher.display();
   computerArcher.display();

   //display Arrow
   arrow.display();

   //if space(32) key is pressed call shoot function of playerArrow
   if(keyCode === 32){
      // call shoot() function and pass angle of playerArcher
      
        arrow.shoot(playerArcher.body.angle);
   }

}

