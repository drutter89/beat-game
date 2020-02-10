var x = 0;
var counter = 60;
function setup() {
    createCanvas(200,200);
    timer = createP('timer');

    interval = setInterval(timeIt, 500);
}
function timeIt(){
    timer.html(counter);
    counter --
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



// Timer ideas
// I have an animation and a timer on the page. Instead of timing up, I can start the timer at something like 60 seconds.
// Then, I can have another counter for "good" presses that are on time with the animation
// I.e, if you hit "X" key when the line hits the end of the canvas at the right time your score will increment by 1
// then after the timer hits 0 the score no longer increments until you click start game again and reset the timer.
// could eventually add a "high score" that gets replaced when you do better each time


// this was the template from the documentation just to test the canvas was working
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