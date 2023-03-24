/* 
  waves = [
    {
      waveColour: ,
      waveWeight: ,
      yPos: #,
      yMin: #,
      yMax: #,
      waveVelocity: {
        speed: #,
        direction: -1 or 1,
      }
      nodes = [
        {
          xPos: x,
          yPos: y,
          minY: #, 
          maxY: #,
          velocity: {
            speed: #,
            direction: -1 or 1,
          }
        }
      ]
    }
  ]
*/

const waves = []

function setup() {
  createCanvas(windowWidth, windowHeight);

  // numOfWaves, waveSpeed, waveMotionRadius, waveWidth, waveColour, waveWeight, nodesPerWave, nodeSpeed
  createWaves(10, 1, 20, 25, 'darkblue', 10, 10, 1)

  frameRate(60)
}

function draw() {
  background('lightblue');

  // draw all nodes
  for(let wave of waves) { 
    for(let node of wave.nodes) {
      point(node.xPos, node.yPos)
    }
  }

  // draw curves
  for(let wave of waves) {
    drawWaveCurves(wave)
  }

  // move nodes in each wave
  for(let wave of waves) {
    // moveNodes(wave)
  }

  // move waves
  moveWaves()
}

function moveWaves() {
  for(let wave of waves) {
    // change direction if needed
    // console.log(wave.waveVelocity);
    wave.waveVelocity.direction = checkChangeDirection(wave.yPos, wave.yMin, wave.yMax, wave.waveVelocity.direction)

    // move according to direction and speed
    wave.yPos += (wave.waveVelocity.speed * wave.waveVelocity.direction)
  }
}

function drawWaveCurves(wave) {
  for(let index = 0; index < wave.nodes.length-1; index++) {
    stroke(wave.waveColour)
    strokeWeight(wave.waveWeight)
    noFill()

    // create start and end points
    const startPoint = [wave.nodes[index].xPos, wave.nodes[index].yPos]
    const endPoint = [wave.nodes[index + 1].xPos, wave.nodes[index + 1].yPos]

    // create control points
    const startControl = [ startPoint[0]-50, startPoint[1]-50 ]
    const endControl = [ endPoint[0]+50, endPoint[1]-50 ]
    // console.log('start', startPoint, 'end', endPoint);

    // draw curve
    curve( startControl[0], startControl[1],   startPoint[0], startPoint[1], endPoint[0], endPoint[1],   endControl[0], endControl[1] )
  }
}

function moveNodes(wave) {
  for(let node of wave.nodes) {
    // change direction if distance from wave.yPos > 50
    /* if( node.yPos < node.yMin || node.yPos > node.yMax ) {
      node.velocity.direction = -node.velocity.direction;
    } */

    node.velocity.direction = checkChangeDirection(node.yPos, node.yMin, node.yMax, node.velocity.direction)

    // move node
    node.yPos += (node.velocity.speed * node.velocity.direction);
  } 
}

function createWaves(numOfWaves, waveSpeed, waveMotionRadius, waveWidth, waveColour, waveWeight, nodesPerWave, nodeSpeed) {
  for(let i = 1; i <= numOfWaves; i++) {
    let yPos = height / (numOfWaves+1) * i;
    createWave( yPos, waveSpeed, waveMotionRadius, waveWidth, waveColour, waveWeight, nodesPerWave, nodeSpeed )
  }
}

function createWave( yPos, waveSpeed, waveMotionRadius, waveWidth, waveColour, waveWeight, nodesPerWave, nodeSpeed ) {
  // create wave
  let wave = {};
  wave.waveColour = waveColour;
  wave.waveWeight= waveWeight;
  wave.yPos = yPos;
  wave.yMin = yPos - waveMotionRadius;
  wave.yMax = yPos + waveMotionRadius;
  wave.waveVelocity = {
    speed: waveSpeed,
  }
  // wave.velocity alternate directions per WAVE
  if(waves.length % 2 === 0) {
    wave.waveVelocity.direction = 1;
  } else {
    wave.waveVelocity.direction = -1
  }


  wave.nodes = [];

  // create nodes for wave.nodes
  for(let i = 0; i < nodesPerWave; i++) {
    let node = {};
    node.xPos = (width / (nodesPerWave-1)) * i;;
    node.yPos = yPos;

    // add variation to xPos, while keeping first and last node at edge of window
    if(i != 0 && i != nodesPerWave-1) {
      node.xPos = node.xPos + random(-30, 30)
    }

    node.yMin = node.yPos - waveWidth;
    node.yMax = node.yPos + waveWidth;

    node.velocity = {};
    node.velocity.speed = nodeSpeed;

    // node.velocity alternate directions per WAVE
    if(waves.length % 2 === 0) {
      node.velocity.direction = 1;
    } else {
      node.velocity.direction = -1
    }

    // node.velocity alternate directions per NODE
    if(i % 2 === 0) {
      node.velocity.direction = -node.velocity.direction;
    }

    // add node to wave.nodes
    wave.nodes.push(node);
  }

  // add wave to waves
  waves.push(wave);
  console.log('wave:', wave);
}

function checkChangeDirection(pos, min, max, direction) {
  if( pos < min || pos > max ) {
    return -direction;
  } else {
    return direction;
  }
}

/* const newNode = function (x, y, waveWidth, speed, direction) {
  return {
    xPos: x,
    yPos: y,
    minMaxPos: {
      minX: x,
      maxX: #,
      minY: #,
      maxY: #,
    },
    velocity: {
      speed: speed,
      direction: direction,
    }
  }
} */
