// JavaScript Document
function Shot(){
this.velocity = -5
this.length = 30;
this.highlight=false;
if (shots.length>20){
	backgroundColor = "red";
	this.velocity = -10;
}
if (shots.length>60){
	backgroundColor = "green";
	this.velocity = -15;
	speed=30;
}
if (shots.length>100){
	backgroundColor = "pink";
	this.velocity = -15;
	speed=35;
}
this.hits = function(bird){
		if (bird.x>this.x-this.length+10 
		&& bird.x<this.x+this.length 
		&& bird.y>this.y-this.length+20
		&& bird.y<this.y+this.length){
		this.highlight = true;
		return true;
		}
			return false;
			this.highlight = false;
		}		
this.y = random(height-90)+scoreHeight;
this.x = width-20;
	this.show = function(){
		fill (200);
		if (this.highlight){
			fill(0,255,0);
			}
		 rect(this.x, this.y, this.length, this.length);	
	}
	
	this.update = function(){
		this.x+=this.velocity;	
	}
	
}
