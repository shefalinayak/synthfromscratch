let carrier, signal;

function setup() {

}

function loop() {

  carrier = time.map(sin(1)).mult(200);
  signal = time.map(sin(300, carrier));

  return signal.mult(0.1);
}

