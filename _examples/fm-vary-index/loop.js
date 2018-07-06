let modIndex, carrier, signal;

function setup() {

}

function loop() {

  modIndex = time.map(sin(1)).mult(0.5);

  carrier = time.map(sin(220));
  carrier = carrier.modulate(modIndex);

  signal = time.map(sin(220, carrier)).mult(0.1);

  return signal;
}

