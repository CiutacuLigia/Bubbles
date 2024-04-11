

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200, 40);
  bubble2 = new Bubble(400, 200, 20);
}

function draw() {
  background(200);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}
