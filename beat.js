var x = 0;
function setup() {
    createCanvas(200,200);
}

function draw() {
    background(51);
    stroke(255);
    line(x,0,x,height);

x=x+3;
if (x > width) {
    x = 0;
}
}

// function setup() {
//     createCanvas(640, 480);
//   }
  
//   function draw() {
//     if (mouseIsPressed) {
//       fill(0);
//     } else {
//       fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
//   }