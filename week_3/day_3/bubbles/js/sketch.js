let bubbles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  createBubbles(200, 50, 5)
  console.log(bubbles);
  for(let bubble of bubbles) {
    if(bubble.y > bubble.minMaxPos.maxY) {
      console.log(`wrong positioning. y=${bubble.y}, maxY=${bubble.minMaxPos.maxY}`);
    }
  }
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
  return {
    x: xPos,
    y: yPos,
    radius: radius,
    minMaxPos: minMaxPos,
    bubbleSpeed: bubbleSpeed,
    bubbleColour: randomColour(),
    draw: function() {
      fill(this.bubbleColour);
      stroke(220);
      ellipse(this.x, this.y, this.radius * 2);
      fill(255);
      ellipse(this.x + this.radius / 4, this.y - this.radius / 4, this.radius / 8
      );
    },
    move: function() {
        if( this.y < this.minMaxPos.minY || this.y > this.minMaxPos.maxY ) {
            this.bubbleSpeed = -this.bubbleSpeed
        }
        this.y -= this.bubbleSpeed
    }
  };
}

function randomColour() {
  return [random(255), random(255), random(255), 150];
}
