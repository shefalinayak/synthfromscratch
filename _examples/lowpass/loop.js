let amp = 0.05;

function setup() {

}

function loop() {
  return time
    .map(whiteNoise)
    .applyFilter(lowpass(0.1))
    .mult(amp);
}