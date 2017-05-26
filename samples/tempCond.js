function delay(ms) {
  var time = new Date().getTime();
  while(new Date().getTime() < time + ms) {}
}

var medioex = require("../index.js");
var pins = medioex.pins.digital.output;

var minTemp = 25;
var maxTemp = 28;
var temp = 0;

medioex.getTemperatureInit();
medioex.digitalOutputInputInit();

while(true) {
  temp = medioex.getTemperature(1);
  console.log("Temperature : " + temp);

  if(temp < minTemp || temp > maxTemp) {
    medioex.digitalSetHigh(pins.J4_1);
    medioex.digitalSetHigh(pins.J4_2);
  }
  else {
    medioex.digitalSetLow(pins.J4_1);
    medioex.digitalSetLow(pins.J4_2);
  }
  
  delay(1000);
}
