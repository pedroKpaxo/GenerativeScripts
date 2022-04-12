let angle = 0;
let c_width = 30;
let magicangle;
let hf_width ;
let hf_height;

let recording = true
const numFrames = 100 // num of frames to record

function setup() {
  createCanvas(500, 500, WEBGL);
  frameRate(60);
  magicangle = atan(1 / sqrt(2));
  hf_width = width/2;
  hf_height = height/2;
}

function draw() {
  background(10);

  // Angle for ortho() projection.
  let orthoAngle = 500;
  ortho(-orthoAngle, orthoAngle, orthoAngle, -orthoAngle, 0, 5000);

  // Perspective angles.
  rotateX(QUARTER_PI);
  rotateY(magicangle);

  let offset = 0; // Creates a offstet fot the z update.
  for (let z = 0; z < height; z += c_width) {
    for (let x = 0; x < width; x += c_width) {

      let angledOffset = angle + offset;
      let Zheight = map(sin(angledOffset), -1, 1, 100, width);

      push(); // Bubble the traslate 
      translate(x - hf_width, 0, z - hf_height);
      normalMaterial();
      sphere(Zheight*0.25)
      box(c_width - 2, Zheight, c_width - 2);
      pop();
    }
    offset += 0.12; // applY a slightly different update
  }
  angle += 0.1; // main update

  // End of draw//
}
