function setup() {
  createCanvas(1200, 1200);
}

function draw() {
  background(20, 200, 255);

  //rectangle 1
  fill(255, 5, 211);
  strokeWeight(10);
  stroke(200, 100, 2);

  rect(390, 340, 400, 400);

  //rectangle 1.5
  fill(235, 52, 11);
  strokeWeight(10);
  stroke(200, 100, 200);

  rect(400, 840, 300, 250);

  // rectangle 2

  fill(30, 20, 211);
  stroke(11, 120, 140);
  strokeWeight(20);
  rect(290, 30, 200, 100);

  // square1
  fill(30);
  stroke(200, 0, 200);
  strokeWeight(10);
  rect(20, 300, 50, 50);

  // square1
  fill(20, 130, 150);
  stroke(100, 22, 200);
  strokeWeight(10);
  rect(20, 400, 300, 90);

  // line 1
  fill(20, 300, 100);
  strokeWeight(60);
  stroke(100, 200, 20);
  line(100, 60, 300, 450);

  // line 2
  fill(20, 300, 100);
  strokeWeight(10);
  stroke(20, 0, 200);
  line(100, 300, 300, 100);

  // circle1
  fill(20, 200, 100);
  strokeWeight(40);
  stroke(200, 0, 0, 100);
  circle(500, 300, 120);

  //circle 2
  fill(20, 300, 100);
  strokeWeight(40);
  stroke(200, 333, 0);
  circle(100, 600, 300);

  //circle 3
  fill(233, 300, 100);
  strokeWeight(20);
  stroke(200, 33, 0);
  circle(300, 200, 40);

  //oval
  fill(22, 330, 0);
  strokeWeight(10);
  stroke(200, 33, 200);
  ellipse(700, 200, 80, 50);

  //shape1
  rotate(QUARTER_PI);
  fill(20, 300, 300);
  strokeWeight(5);
  stroke(200, 100, 200);
  quad(20, 20, 400, 30, 400, 100, 30, 120);
  translate(400, 400);

  //rectangle 3
  rotate(0);
  strokeWeight(30);
  stroke(300, 200);
  translate(50, 50);
  rect(300, 50, 50, -500);

  //rectangle 4
  rotate(0);
  strokeWeight(12);
  stroke(100, 0, 21);
  fill(30, 100, 302);
  rect(300, 300, 40, 90);

  //rectangle 5
  translate(50, 50);
  rect(20, 200, 30, 80);

  // shape 2
  quad(100, 100, 220, 75, 100, 200, 50, 200);

  line(300, 30, 200, 150);
}
