var bird;
var canvas1;
var fail=false;
var shots = [];
var foods = [];
var spacer = false;
var score=0;
var speed=35;
var foodSpeed = 500;
var scoreHeight = 50;
var backgroundColor = "blue";
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  canvas1.position(x, 100);
}
function setup() { 
  canvas1 =  createCanvas(666, 500);
  centerCanvas();
  bird = new Bird();
  foods.push(new food());
  shots.push(new Shot());
}

		
function draw() { 
	if (fail){
		background (backgroundColor);
		textAlign(CENTER)
		textSize(32);
		var s  = "Your Score is " + score +". " + "Nice Job! Click to Restart!";
		text(s, 0,200, width, height);
		textFont("Helvetica Neue");
		fill(250, 250, 250);
		return;
		}
	background(backgroundColor);
  	fill("black");
 	rect(0, 0, width, scoreHeight);	
  	textSize(32);
    fill("white");
	textAlign(CENTER)
    text("Score: "+score, width/2, 40 );

 for (var i=0; i<shots.length; i++){
	  shots[i].show();
	  shots[i].update();
	  if (shots[i].hits(bird)){
		 fail=true;
		 	  }
		}
for (var i=0; i<foods.length; i++){
	  foods[i].show();
	  foods[i].update();
	  if (foods[i].hits2(bird)){
		  score+=50;
		  }
}

  bird.update();
  bird.show();

  
  	if (frameCount%5==0){
		score++
	}
  
  	if (frameCount%speed==0){
	    shots.push(new Shot());
	 }
	 
	if (frameCount%foodSpeed==0){
	    foods.push(new food());
	 }
}

function mouseClicked(){
	if (fail){
	score=0;
	bird.y=height/2;
	shots.length=0;
	food.length=0;
	 backgroundColor = "blue";
	 bird.velocity = -10;
	fail=false;

	}

		}
function keyPressed(){
	if (key == ' '){
		bird.up();
	}
}


function Bird(){
this.x = 45;
this.y = height/2;
this.gravity=0.5;
this.velocity=-10;
this.jump=-15;
	this.show = function(){
		fill(255);
		ellipse(this.x, this.y, 32, 32);
	}
	this.up = function(){
		this.velocity+=this.jump;
		}
	this.update = function(){
		this.velocity += this.gravity; 
		this.velocity*=0.99
		this.y += this.velocity; 
    		if (this.y > height-10) {
      			this.y = height-10;
      			this.velocity = 0;
    		}	
		if (this.y<scoreHeight+15){
			this.y=scoreHeight+15;
			this.velocity=this.gravity;
		}
		if (this.y>height-20){
			fail=true;
		}
	}
	
}

