function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(640, 360)

  for (var i = 0; i < 10; i++) {
    voronoiSite(i * 30, i * 50);
  }

  voronoi(width, height, false);
}

function draw() {
  background(36);

}
