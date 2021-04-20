function hexagon(x, y, radius) {
  let angle = TWO_PI / 6;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function setup(){
 
	w = 500;
	h = 500;

	hex_size = 10;

	grid_x_pixels = .9 * w;
	grid_y_pixels = .9 * h;

	sep_x = 3 * hex_size;
	sep_y = .86 * hex_size;

	grid_x = (grid_x_pixels / sep_x) + 1;
	grid_y = (grid_y_pixels / sep_y) + 1;

    createCanvas(w, h);
}
function draw(){
    background(255);
    
    
    //~ pixelDensity(2);
    
    //~ strokeWeight(2);
    //~ stroke(0);
    //~ noFill();
    
    current_x = w/2.0 - grid_x_pixels/2.0;
    current_y = h/2.0 - grid_y_pixels/2.0;
    for (i in (grid_y)){
        if (i % 2 == 0){
            current_x += 1.5 * hex_size;
		};
        for (j in (grid_x)){

            hexagon(current_x, current_y, hex_size);
            
            current_x += sep_x;
		};
        current_x = w/2.0 - grid_x_pixels/2.0;
        current_y += sep_y;
	};
};
