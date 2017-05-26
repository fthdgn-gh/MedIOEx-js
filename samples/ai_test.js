function delay(ms) {
  var time = new Date().getTime();
  while(new Date().getTime() < time + ms) {}
}

var medioex = require("../index.js");

medioex.analogInputInit();

while(true) {
  console.log("J13_1 : " + medioex.analogGetValueAsDigital(medioex.pins.analog.input.J13_1));
  delay(100);
  console.log("J13_2 : " + medioex.analogGetValueAsDigital(medioex.pins.analog.input.J13_2));
  delay(100);
  console.log("J13_3 : " + medioex.analogGetValueAsDigital(medioex.pins.analog.input.J13_3));
  delay(100);
  console.log("J13_4 : " + medioex.analogGetValueAsDigital(medioex.pins.analog.input.J13_4));
  delay(1000);
}
