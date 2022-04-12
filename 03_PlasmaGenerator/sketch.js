let hf_width;
let hf_height;
let gridspace = 50;
let angle = 20;
let magicangle;
let MapSineFunction;
let background_color;

const ProjectTitle = 'Plasma Generator 01';

// CCapture Variables
const FilmLength = 10; // In Frmes
const recording = false; // Set true to record

// Saving
const saving = false;

// Capturer object
var capturer = new CCapture({
  format: 'webm',
  framerate: 60,
  quality: 900,
  //autoSaveTime: 10,
});

function preload() {
}


function setup() {
  createCanvas(500, 500, WEBGL);
  // Project Variables
  magicangle = atan(1 / sqrt(2));
  hf_width = width / 2;
  hf_height = height / 2;
}

function draw() {
  let offset = 0; // For constant update
  let angledOffset = angle + offset

  // Global Sine Function
  // Sin & Cosin is like Sodoma and Gomorra !#$%(#&)
  MapSineFunction = map(sin(angledOffset), -1, 1, 100, 500);

  // CCapture
  // Check if it is recording
  if (recording === true) {
    if (frameCount === 1) {
      capturer.start()
    }
  }

  background(10, 10 + MapSineFunction * 0.04, MapSineFunction / 10, 0.1);
  ambientLight(MapSineFunction * 0.3, 200, MapSineFunction);

  //Ortho 01
  orthoAngle = 355 + MapSineFunction * 0.3;
  ortho(-orthoAngle, orthoAngle, orthoAngle, -orthoAngle, 0, 10000);

  // Another Cool Ortho Angle
  //ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 1000);

  // Angles for projection
  rotateX(QUARTER_PI + angle * 0.1);
  rotateY(magicangle);

  for (let z = 0; z < width; z += 40) {
    for (let x = 0; x < width; x += 40) {

      push();
      translate(x - hf_width - MapSineFunction, 0, z + hf_height - MapSineFunction);
      stroke(MapSineFunction * 0.3, 20, -1 * MapSineFunction);
      strokeWeight(angle * 0.03)
      ambientMaterial(MapSineFunction * 0.3, 240, MapSineFunction)
      box(MapSineFunction * 0.1, MapSineFunction, 4);

      translate(width - MapSineFunction, 0, z + hf_height + MapSineFunction);
      stroke(MapSineFunction * 0.3, 20, -1 * MapSineFunction);
      strokeWeight(angle * 0.03)
      ambientMaterial(MapSineFunction * 0.3, 240, 100 - MapSineFunction)
      box(MapSineFunction * 0.1, MapSineFunction, 4);


      pop();

    }
    offset += 0.934;
  }
  angle += 0.1;



  ///////////////////////////
  // Recording Stuff ///////
  /////////////////////////
  if (recording == true) {
    if (frameCount < FilmLength) {
      capturer.capture(canvas)
    } else if (frameCount === FilmLength) {
      capturer.save()
      capturer.stop()
    }
  }

  if (saving == true) {
    if (frameCount < FilmLength) {
      // Creates a string 
      frameRate(60);
      filename = ProjectTitle + frameCount + ".jpg"
      saveCanvas(filename)
    } else if (frameCount === FilmLength) {
    }
  }

}
