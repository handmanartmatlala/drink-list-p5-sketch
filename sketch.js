var words = ["coffee", "tea", "water", "milk","Beer", "Cider", "liquor","Hard soda","Wine","Milkshakes","Mixed drinks"];
var index = 0

var backgroundColor = 0; 

let r, g, b;

let img;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  
  img = loadImage('giphy.gif');

}

function draw() {
  background(backgroundColor);
  // text
  
  image(img,0,0,1600,700);
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  textSize(200);
  textAlign(CENTER, CENTER);
  text(words[index],600, 400);
}


// When the user clicks the mouse
function mousePressed() {
  backgroundColor = random(255);
  index = floor(random(words.length));
  console.log(index);
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 950, 500);
  if (d < 1500) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
    
    if (index == words.length){
      index = 0;
    }
  }
}
