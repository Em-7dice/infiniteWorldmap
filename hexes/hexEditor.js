function setup(){
	//~ createCanvas(windowWidth, windowHeight);
	createCanvas(720,360);
	
	chunkLength = 12;
	
	chunksInX = width / chunkLength;
	chunksInY = height / chunkLength;
	
}

function draw(){
	
	background(48); //~ should be 36 to match website bg
	
	//~ translate(width/2, height/2);
	
	noFill();
	noStroke();
	
	let noiseSpace = noiseDetail2D(width, height, 1, 25, 10, 0.5, 2);	
		
	currX = 0
	currY = 0
	
	index = 0
	
	for(y = 0; y < chunksInY; y++){
		for(x = 0; x < chunksInX; x++){
						
			fill((noiseSpace[x][y] + 1)* 0.5 * 255);
			rect(currX, currY, chunkLength);
			
			currX += chunkLength
		}
		currX = 0
		currY += chunkLength
	}
	
	noLoop();
}
