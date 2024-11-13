var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

function startScreen(){
		background(255, 230, 242)
		fill(255, 41, 144)
		textAlign(CENTER);
        textSize(40);
        text("DONT BREAK THE HEARTS!", width / 2, 200);
        textSize(20);
        text("Click to Start", width / 2, 250);
		reset();
}

function gameOn(){
	background(255, 230, 242)
  text("score = " + score, 50,40)
  text("🩷",x,y,20,20)
  rectMode(CENTER)
  rect(mouseX,height-10,50,30)
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=.5
    score+= 1
  }
	if(y==-20){
  	pickRandom();
  }
}

function pickRandom(){
	x= random(20,width-20)
}

function endScreen(){
		background(255)
        fill (217, 0, 0)
		textAlign(CENTER);
        textSize(80);
        text("💔", 300, 140);
        textSize(40);
		text('GAME OVER', width / 2, height / 2)
        textSize(20);
  	text("SCORE = " + score, width / 2, height / 2 + 20)
		text('Click to Play Again', width / 2, height / 2 + 40);
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
