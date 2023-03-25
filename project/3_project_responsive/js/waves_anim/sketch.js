/* 
  waves = [
    {
      waveColour: ,
      waveWeight: ,
      yPos: #,
      yMin: #,
      yMax: #,
      velocity: {
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

const waves = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // numOfWaves, waveSpeed, waveMotionRadius, waveWidth, waveColour, waveWeight, nodesPerWave, nodeSpeed
  createWaves( 1, 0.3, 50, 50, 'darkblue', 10, 15, 1 )

  frameRate(30)
}

function draw() {
  background('lightblue');

  
  // move nodes in each wave
  for(let wave of waves) {
    moveNodes(wave)
  }

  // wave lines
  for(let wave of waves) {
    strokeWeight(2)
    stroke('green')
    line(0, wave.yMin, width, wave.yMin);
    line(0, wave.yMax, width, wave.yMax);
  }
  
  // move waves
  // moveWaves()


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
}

function moveWaves() {
  for(let wave of waves) {
    // updating yPos of waves
    let yChange = (wave.velocity.speed * wave.velocity.direction);

    
    // move according to direction and speed
    wave.yPos += yChange;
    
    // change direction (if needed)
    wave.velocity.direction = checkChangeDirection(wave.yPos, wave.yMin, wave.yMax, wave.velocity.direction);


    // updating yPos of nodes of wave
    for(let node of wave.nodes) {
      node.yPos += yChange;
    }
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
    const startControl = [ startPoint[0]-100, startPoint[1]-100 ]
    const endControl = [ endPoint[0]+100, endPoint[1]-100 ]
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

    if ( checkChangeDirection( node.yPos, node.yMin, node.yMax ) == true ) {
      node.velocity.direction = -node.velocity.direction

      // reset position to either max or min
      if ( node.yPos < node.yMin ) {
        node.yPos = node.yMin + 1;
      } else if ( node.yPos > node.yMax ) {
        node.yPos = node.yMax - 1;
      }
    }

    // move node according to wave.velocity.direction
    if( wave.velocity.direction === node.velocity.direction ) {
      node.yPos += (node.velocity.speed * node.velocity.direction);
    } else {
      node.yPos += (node.velocity.speed * node.velocity.direction);
    }
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
  wave.velocity = {
    speed: waveSpeed,
  }
  // wave.velocity alternate direction per WAVE
  if(waves.length % 2 === 0) {
    wave.velocity.direction = 1;
  } else {
    wave.velocity.direction = -1
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

function checkChangeDirection(pos, min, max) {
  if( pos < min || pos > max ) {
    return true;
  } else {
    return false;
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
