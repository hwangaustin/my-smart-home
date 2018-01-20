var x=0;
var circle_diameter=10;
var rotation_diameter = 50;
var frameCount_divider = 15;
var lifespan_subtracter = 2.5;
var Circles;

// A simple Particle class
var Circle = function(x) {
    this.position_x = rotation_diameter*cos(x)+width/2;
    this.position_y = rotation_diameter*sin(x)+height/2;
    this.lifespan = 255; // RGB Alpha value
};

Circle.prototype.run = function() {
  this.update();
  this.display();
};

Circle.prototype.update = function(){
    this.lifespan -= lifespan_subtracter; // lifespan determines color
};

Circle.prototype.display = function() {
    fill(0,202,255,this.lifespan);
    ellipse(this.position_x, this.position_y,
            circle_diameter, circle_diameter);
};

Circle.prototype.isDead = function(){
  if (this.lifespan <= 0) {
    return true;
  } else {
    return false;
  }
};

function setup() {
    createCanvas(windowWidth,windowHeight);
    noStroke();
    Circles = [];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(60,60,60);
    fill(color(0,202,255));
    Circles[Circles.length] = new Circle(x);
    for (i = Circles.length-1; i>=0; i--) {
        var circle = Circles[i];
        circle.run();
        if (circle.isDead()) {
            Circles.splice(i,1);
        }
    }
    x = frameCount/frameCount_divider;
}