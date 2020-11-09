function noiseDetail2D(width, height, seed, zoom, octaves, persistance, lacunarity) {
  simplexNoise = new SimplexNoise(seed);
  noiseMap = [
    []
  ];
  if (zoom <= 0) {
    zoom = 0.0001;
  }

  for (x = 0; x < width; x++) {
    noiseMap[x] = [];
    for (y = 0; y < height; y++) {
      amplitude = 1;
      frequency = 1;
      noiseVal = 0;

      for (let i = 0; i < octaves; i++) {
        noiseX = (x / zoom * frequency) + (i * 2048);
        noiseY = (y / zoom * frequency) + (i * 2048);

        noiseVal += (simplexNoise.noise2D(noiseX, noiseY)) * amplitude;

        amplitude *= persistance;
        frequency *= lacunarity;

        noiseMap[x][y] = noiseVal;
      }
    }
  }

  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      let theoMax = (1 - Math.pow(persistance, octaves)) / (1 - persistance)
      // theoMax is the theoretical max of the first (octave) values of a geometric series with a ratio (persistance)
      // Basically I just assume that the noiseX or noiseY is 1 for every octave we check.
      noiseMap[x][y] = map(noiseMap[x][y], -theoMax, theoMax, -1, 1);
    }
  }
  return noiseMap;
}
