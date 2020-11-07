function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(640, 360);
}
// noiseDetail(1);
function draw() {
  let xoff = 0

  loadPixels();
  seed = 1
  let noiseSpace = noiseDetail2D(width, height, seed, 100, 4, 1 / 2, 2);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      // let v = noise(xoff, yoff) * 255;
      let v = noiseSpace[x][y];
      let c = map(v, -1, 1, 0, 255);
      let r = c;
      let g = c;
      let b = c;

      if (v < -1) {
        r = 127
        g = 0
        b = 0
      } else if (v > 1) {
        r = 0
        g = 127
        b = 127
      }
      pixels[index + 0] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
      pixels[index + 3] = 255;

    }

    updatePixels();
  }
  noLoop();
}
