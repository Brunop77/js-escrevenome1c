function setup() {
    createCanvas(600, 600);
    background("#557432");
  }
  
  function draw() {
   
    stroke("Blue");
    fill("#D8EC1E");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }