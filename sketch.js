function setup() {
  createCanvas(600, 400);
  background(0);
  noStroke();
}

function draw() {
  fill(255, 50);
  circle(mouseX, mouseY, 5);

  function keyPressed() {
    background(0);
  }
}
