let travellingWave;

function setup() {
  let amp = 0.05;

  travellingWave = new Float32Array(128)
    .map(whiteNoise)
    .mult(amp);
}

function loop() {
  travellingWave = travellingWave.delay(1);
  return travellingWave;
}