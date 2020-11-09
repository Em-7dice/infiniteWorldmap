function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(640, 360);
}
// noiseDetail(1);
function draw() {
  let xoff = 0

  loadPixels();
  pixelDensity(displayDensity());
  seed = random();
  let noiseSpace = noiseDetail2D(width, height, seed, 100, 4, 1 / 2, 2);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      // let v = noise(xoff, yoff) * 255;
      let v = noiseSpace[x][y];
      // let c = map(v, -1, 1, 0, 255);
      // let r = c;
      // let g = c;
      // let b = c;
      //
      // pixels[index + 0] = r;
      // pixels[index + 1] = g;
      // pixels[index + 2] = b;
      // pixels[index + 3] = 255;

      let oceanFloor = color(0, 46, 99)
      let oceanSurface = color(15, 152, 286)
      let beach = color(245, 222, 179)
      let forest = color(0, 158, 96)
      let rock = color(112, 128, 144)
      let snow = color(255, 255, 255)

      let oceanMax = 0.21
      let beachMax = 0.45
      let forestMax = 0.75

      if (v <= oceanMax) {
        c = lerpColor(oceanFloor, oceanSurface, map(v, -1, oceanMax, 0, 1))
      } else if (v > oceanMax && v <= beachMax) {
        c = lerpColor(beach, forest, map(v, oceanMax, beachMax, 0, 1))
      } else if (v > beachMax && v <= forestMax) {
        c = lerpColor(forest, rock, map(v, beachMax, forestMax, 0, 1))
      } else {
        c = lerpColor(rock, snow, map(v, forestMax, 1, 0, 1))
      }

      pixels[index + 0] = red(c)
      pixels[index + 1] = green(c)
      pixels[index + 2] = blue(c)
      pixels[index + 3] = 255

    }

    updatePixels();
  }
  noLoop();
}
