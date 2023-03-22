let bubbles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  createBubbles(200, 50, 5)
  console.log(bubbles);
}

function draw() {
  background("white");
  //   drawBubble(mouseX, mouseY, 100);
  for(let bubble of bubbles) {
    bubble.draw();
    bubble.move();
  }
}

function createBubbles( num, maxRadius, maxSpeed ) {
    bubbles = [];
    for(let i = 0; i < num; i++) {
        let radius = random(maxRadius);
        let minMaxPos = {
            minX: radius,
            minY: radius,
            maxX: width - radius,
            maxY: height - radius,
        }
        // let x = minMaxPos.minX + random(minMaxPos.minX, minMaxPos.maxX);
        let x = minMaxPos.minX + random() * (minMaxPos.maxX - minMaxPos.minX);
        let y = minMaxPos.minY + random() * (minMaxPos.maxY - minMaxPos.minY);
        let bubbleSpeed = random(maxSpeed);
        bubbles.push(createBubble(x, y, radius, bubbleSpeed, minMaxPos))
        // bubbles.push(createBubble(50, 50, 100, 5))
    }
}

function createBubble( xPos, yPos, radius, bubbleSpeed, minMaxPos ) {
  vectorX
}

function randomColour() {
  return [random(255), random(255), random(255), 150];
}
