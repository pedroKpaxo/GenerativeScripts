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
  //ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 1000);
  ortho(-500, 500, 500, -500, 0, 5000);
  rotateX(QUARTER_PI);
  rotateY(magicangle);
  

  let offset = 0;
  for (let z = 0; z < height; z += c_width) {
    for (let x = 0; x < width; x += c_width) {
      push();
      
      let angledOffset = angle + offset;
      let height = map(sin(angledOffset), -1, 1, 100, width);

      translate(x - hf_width, 0, z - hf_height);
      normalMaterial();
      sphere(height*0.25)
      box(c_width - 2, height, c_width - 2);

      pop();
    }
    offset += 0.12;
  }
  angle += 0.1;

  // End of draw//
}
