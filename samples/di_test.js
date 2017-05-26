function delay(ms) {
  var time = new Date().getTime();
  while(new Date().getTime() < time + ms) {}
}

var medioex = require("../index.js");
var pins = medioex.pins.digital.input;

medioex.digitalOutputInputInit();

while(true) {

  console.log("J14_16 : " + medioex.digitalGetValue(pins.J14_16));
  console.log("J14_15 : " + medioex.digitalGetValue(pins.J14_15));
  console.log("J14_14 : " + medioex.digitalGetValue(pins.J14_14));
  console.log("J14_13 : " + medioex.digitalGetValue(pins.J14_13));

  console.log("J15_12 : " + medioex.digitalGetValue(pins.J15_12));
  console.log("J15_11 : " + medioex.digitalGetValue(pins.J15_11));
  console.log("J15_10 : " + medioex.digitalGetValue(pins.J15_10));
  console.log("J15_9 : " + medioex.digitalGetValue(pins.J15_9));

  delay(1000);
}
