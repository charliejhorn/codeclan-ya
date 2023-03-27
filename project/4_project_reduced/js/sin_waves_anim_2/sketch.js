/* 
  waves = [
    {
      colour: "",
      weight: #,
      yPos: #,
      initialYPos: #,
      motionRadius: #,
      speed = #,
      nodeMotionRadius: #,
      sinPos: 0 or 1, (then incrementing)
      nodes = [
        {
          xPos: x,
          yPos: y,
          speed: #,
          sinPos: 0 or 1, (depending on alternation)
        },
      ]
    }
  ]
*/

let waves = [];
const canvasDetails = {};

const numOfWaves = 3;
const waveMotionRadius = 18;
const waveSpeed = 0.007;
const colour = 'darkblue';
const weight = 5;
const nodesPerWave = 10;
const nodeMotionRadius = 20;
const nodeSpeed = 0.004;

function getCanvasDetails() {
  canvasDetails.element = document.querySelector('#home-page-anim-canvas');
  canvasDetails.width = canvasDetails.element.offsetWidth;
  canvasDetails.height = canvasDetails.element.offsetHeight;
}


function setup() {
  getCanvasDetails();
  console.log(canvasDetails);
  const sketchCanvas = createCanvas(canvasDetails.width, canvasDetails.height);
  sketchCanvas.parent(canvasDetails.element);

  createWaves(numOfWaves, waveMotionRadius, waveSpeed, colour, weight, nodesPerWave, nodeMotionRadius, nodeSpeed)
  
  frameRate(60)
  
  
  /* console.log( '0:', round( sin( PI * 0) * 100 ) / 100 );
  console.log( '0.1:', round( sin( PI * 0.1) * 100 ) / 100 );
  console.log( '0.5:', round( sin( PI * 0.5) * 100 ) / 100 );
  console.log( '1:', round( sin( PI * 1) * 100 ) / 100 );
  console.log( '1.5:', round( sin( PI * 1.5) * 100 ) / 100 );
  console.log( '2:', round( sin( PI * 2) * 100 ) / 100 ); */
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
  moveWaves()
  
  
  // draw all nodes
  for(let wave of waves) { 
    for(let node of wave.nodes) {
      strokeWeight(wave.weight)
      point(node.xPos, node.yPos)
    }
  }
  
  // draw curves
  for(let wave of waves) {
    drawWaveCurves(wave)
  }
}

function windowResized() {
  resizeCanvas(canvasDetails.width, canvasDetails.height);
  getCanvasDetails();

  // clear waves object
  waves = [];
  console.log('deleted waves');
  createWaves(numOfWaves, waveMotionRadius, waveSpeed, colour, weight, nodesPerWave, nodeMotionRadius, nodeSpeed)
  console.log('windowresized');
}

function moveWaves() {
  for(let wave of waves) {
    // move node according to sin Y value (input of sinPos)
    wave.yPos = (sin(PI * wave.sinPos) * wave.motionRadius + wave.initialYPos)

    // increment sinPos
    wave.sinPos += wave.speed;
  }
}

function moveNodes(wave) {
  for(let node of wave.nodes) {
    // move node according to sin Y value (input of sinPos)
    node.yPos = (sin(PI * node.sinPos) * wave.nodeMotionRadius + wave.yPos)

    // increment sinPos
    node.sinPos += node.speed;
  } 
}

function drawWaveCurves(wave) {
  for(let index = 0; index < wave.nodes.length-1; index++) {
    stroke(wave.colour)
    strokeWeight(wave.weight)
    noFill()

    // set control point difference
    const cpd = 75

    // create start and end points
    const startPoint = [wave.nodes[index].xPos, wave.nodes[index].yPos]
    const endPoint = [wave.nodes[index + 1].xPos, wave.nodes[index + 1].yPos]

    // create control points
    const startControl = [ startPoint[0]-cpd, startPoint[1]-cpd ]
    const endControl = [ endPoint[0]+cpd, endPoint[1]-cpd ]
    // console.log('start', startPoint, 'end', endPoint);

    // draw curve
    curve( startControl[0], startControl[1],   startPoint[0], startPoint[1], endPoint[0], endPoint[1],   endControl[0], endControl[1] )
  }
}

function createWaves(numOfWaves, waveMotionRadius, waveSpeed, colour, weight, nodesPerWave, nodeMotionRadius, nodeSpeed) {
  for(let i = 1; i <= numOfWaves; i++) {
    let yPos = height / (numOfWaves+1) * i;
    createWave( yPos, yPos, waveMotionRadius, waveSpeed, colour, weight, nodesPerWave, nodeMotionRadius, nodeSpeed )
  }
}

function createWave( yPos, intialYPos, waveMotionRadius, waveSpeed, colour, weight, nodesPerWave, nodeMotionRadius, nodeSpeed ) {
  // create wave
  let wave = {};
  wave.colour = colour;
  wave.weight= weight;
  wave.yPos = yPos;
  wave.initialYPos = yPos;
  wave.motionRadius = waveMotionRadius;
  wave.speed = waveSpeed;
  wave.nodeMotionRadius = nodeMotionRadius;

  // wave.sinPos alternate value per WAVE
  if(waves.length % 2 === 0) {
    wave.sinPos = 0;
  } else {
    wave.sinPos = 1;
  }

  wave.nodes = [];

  // create nodes for wave.nodes
  for(let i = 0; i < width / 10; i++) {
    let node = {};
    node.xPos = (width / (nodesPerWave-1)) * i;;
    node.yPos = yPos;
    node.speed = nodeSpeed;

    // add variation to xPos, while keeping first and last node at edge of window
    if(i != 0 && i != nodesPerWave-1) {
      node.xPos = node.xPos + random(-20, 20)
    }

    // node.sinPos alternate value per NODE
    if(i % 2 === 0) {
      node.sinPos = 0;
    } else {
      node.sinPos = 1;
    }

    // node.sinPos alternate value per WAVE
    if(waves.length % 2 === 0) {
      node.sinPos += 1;
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
