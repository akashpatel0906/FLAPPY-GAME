// JavaScript Document// JavaScript Document

function food(){
this.velocity = -5
this.a = width;
this.length = 35;
this.highlighter=false;

this.hits2 = function(bird){
	if (bird.x>this.x-this.length
		&& bird.x<this.x+this.length 
		&& bird.y>this.y-30
		&& bird.y<this.y+30){
		this.highlighter = true;
		return true;		
		
		}
			this.highlighter = false;
			return false;
		}		
this.y = random(height-90)+scoreHeight;
this.x = width-20;
	this.show = function(){
		fill (0,0,0);
		if (this.highlighter){
			fill (0,250,0);
			if (shots.length>20 && shots.length<60){
			fill(0,250,0);
			}
			else if (shots.length>60){
			fill(0,0,255);
			}
		}
		ellipse(this.x, this.y, 35, 35);
	

		}
	
	this.update = function(){
		this.x+=this.velocity;	
	}
	
}
