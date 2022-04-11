let hf_width;
let hf_height;
let gridspace = 50;



function setup() {
  createCanvas(500, 500);
  magicangle = atan(1 / sqrt(2));
  hf_width = width / 2;
  hf_height = height / 2;

}

function draw() {
  background(255);
  // Loop for the x values of the cartesian field
  for (let x = 0; x < width; x += gridspace) {
    line(x, 0, x, width);
    // Loop for the y values of the cartesian field
    for (let y = 0; y < height; y += gridspace) {
      line(0, y, height, y);
    }
  }
}
