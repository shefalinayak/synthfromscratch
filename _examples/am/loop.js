let carrier, signal;

function setup() {

}

function loop() {

  carrier = time.map(sin(1)).mult(0.5);
  signal = time.map(sin(440)).mult(0.1);

  signal = signal.modulate(carrier);

  return signal;
}