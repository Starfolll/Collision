function setup() {
  createCanvas(windowWidth,windowHeight);
  noFill();
  stroke(0);
  strokeWeight(3);
  background(0);
  for (var i = 0; i < count; i++){
	  var dx = random(-1,1);
	  var dy = random(-1,1);
	  var d = sqrt(sq(dx) + sq(dy));
	  dx /= d;
	  dy /= d;
	  var c = [0,0,0];
		ball[ball.length] = new Ball(random(50,width-50),random(50,height-50),dx,dy,random(1,5),c);
  }
}

var ms = 0;

var ball = [];
var count = 1000;

function draw() {
	background(255,255,255,3);
	var r = keyIsPressed;
	if (r){
		background(50);
	}
  for (var i = 0; i < count; i++){
  	if (r){
  		ball[i].reactivate();
  	}
		ball[i].show();
		ball[i].physics();
		ball[i].collision();
	}
}

var allSize = 20;

function Ball(px,py,dx,dy,s,c){
	this.px = px;
	this.py = py;
	this.dx = dx;
	this.dy = dy;
	this.speed = s;
	this.show = function(){
		push();
			translate(this.px,this.py);
			stroke(c[0],c[1],c[2]);
      noFill();
			ellipse(0,0,allSize,allSize);
		pop();
	}
	this.physics = function(){
		this.px += this.dx * this.speed;
		this.py += this.dy * this.speed;
	}
	this.collision = function(){
		if (this.py < 0 || this.py > height){
			this.dy *= -1;
		}
		if (this.px < 0 || this.px > width){
			this.dx *= -1;
		}
	}
	this.reactivate = function(){
		this.px = width/2;
		this.py = height/2;
	}
}
