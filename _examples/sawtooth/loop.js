let freq = 440;
let amp = 0.1;

function setup() {

}

function loop() {
  return time
    .map(saw(freq))
    .mult(amp);
}