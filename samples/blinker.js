function delay(ms) {
  var time = new Date().getTime();
  while(new Date().getTime() < time + ms) {}
}

var medioex = require("../index.js");
var pins = medioex.digital.pins.output;

medioex.digitalOutputInputInit();

while(true)
{
  medioex.digital.setHigh(pins.J4_1);
  delay(250);
  medioex.digital.setLow(pins.J4_1);
  delay(250);
}
