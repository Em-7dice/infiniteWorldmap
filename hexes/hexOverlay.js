function setup(){
	createCanvas(windowWidth, windowHeight);
	//~ createCanvas(640,360);
	
	//~ chunkLength = 100
	
	hexRadius = 24;
	inRadius = hexRadius * sqrt(3) * 0.5;
	
	grid_x_pixels = 0.9 * width;
	grid_y_pixels = 0.9 * height;
	
	sep_x = 3 * hexRadius;
	sep_y = inRadius;
	
	grid_x = (grid_x_pixels / sep_x) + 1;
	grid_y = (grid_y_pixels / sep_y) + 1;
}

function draw(){
	
	//~ background(48); //~ should be 36 to match website bg
	
	//~ translate(width/2, height/2);
	
	noFill();
	
	current_x = width/2.0 - grid_x_pixels/2.0 - sep_x / 2;
    current_y = height/2.0 - grid_y_pixels/2.0;
    
    for(y = 0; y <= grid_y; y++){
		if(y % 2 == 0){
			current_x += sep_x / 2;
			};
		for (x = 0; x <= grid_x; x++){
			//~ push();
				//~ fill(random(255),random(255),random(255));
				hexagon(current_x, current_y, hexRadius);
            //~ pop();
            
            current_x += sep_x;
		}
        current_x = width/2.0 - grid_x_pixels/2.0 - sep_x / 2;
        current_y += sep_y;		
	}
	noLoop();
}

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
