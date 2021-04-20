function setup(){
	createCanvas(windowWidth, windowHeight - 4);
	//~ createCanvas(720,360);
	
	hexRadius = 3;
	inRadius = hexRadius * sqrt(3) * 0.5;
	
	hexesInX = (width / (1.5 * hexRadius)) - 3;
	hexesInY = (height / inRadius) - 3;
	
}

function draw(){
	
	background(36); //~ should be 36 to match website bg
	
	//~ translate(width/2, height/2);
	
	noFill();
	noStroke();
	strokeWeight(0.1); stroke('rgba(0,0,0,0.25)')
	
	let elevationMap = noiseDetail2D(width, height, random(), 576, 6, 9/16, 3); //~ seed 124 is nice	
		
	currX = hexRadius
	currY = inRadius

	sepX = 3 * hexRadius;
	sepY = inRadius;
	
	startX = 0 * hexRadius
	startY = 0 * hexRadius
	
	for(j = 0; j <= hexesInY + 1; j++){
		
		if(j % 2 == 1){
			currX += sepX / 2;
		}
		
		for(i = 0; i < hexesInX/2; i++){
			
			x = i * 2
			y = j
			
			let v = (elevationMap[x + startX][y + startY]);

		    let oceanFloor = color(0, 46, 99)
   		    let oceanSurface = color(15, 152, 286)
		    let beach = color(245, 222, 179)
		    let forest = color(0, 158, 96)
		    let rock = color(112, 128, 144)
		    let snow = color(255, 255, 255)

		    let oceanMax = 0.21
		    let beachMax = 0.3
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
			
			fill(c)
			//~ fill(random(255), random(255), random(255))
			hexagon(currX + hexRadius, currY, hexRadius +.5);
			
			currX += sepX
		}
		currX = hexRadius
		currY += sepY
	}
	
	
	//~ fill('rgba(0,0,0,0.25)');rect(0,0,720,360)
	
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
