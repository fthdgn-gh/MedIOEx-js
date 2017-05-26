function delay(ms) {
  var time = new Date().getTime();
  while(new Date().getTime() < time + ms) {}
}

var medioex = require("../index.js");
var pins = medioex.pins.digital.output;

medioex.digitalOutputInputInit();

while(true)
{
  medioex.digitalSetHigh(pins.J3_1);
  delay(250);
  medioex.digitalSetLow(pins.J3_1);
  medioex.digitalSetHigh(pins.J3_2);
  delay(250);
  medioex.digitalSetLow(pins.J3_2);
  medioex.digitalSetHigh(pins.J3_3);
  delay(250);
  medioex.digitalSetLow(pins.J3_3);
  medioex.digitalSetHigh(pins.J3_4);
  delay(250);
  medioex.digitalSetLow(pins.J3_4);

  medioex.digitalSetHigh(pins.J4_1);
  delay(250);
  medioex.digitalSetLow(pins.J4_1);
  medioex.digitalSetHigh(pins.J4_2);
  delay(250);
  medioex.digitalSetLow(pins.J4_2);
  medioex.digitalSetHigh(pins.J4_3);
  delay(250);
  medioex.digitalSetLow(pins.J4_3);
  medioex.digitalSetHigh(pins.J4_4);
  delay(250);
  medioex.digitalSetLow(pins.J4_4);

  medioex.digitalSetHigh(pins.J5_5);
  delay(250);
  medioex.digitalSetLow(pins.J5_5);
  medioex.digitalSetHigh(pins.J5_6);
  delay(250);
  medioex.digitalSetLow(pins.J5_6);
  medioex.digitalSetHigh(pins.J5_7);
  delay(250);
  medioex.digitalSetLow(pins.J5_7);
  medioex.digitalSetHigh(pins.J5_8);
  delay(250);
  medioex.digitalSetLow(pins.J5_8);

  medioex.digitalSetHigh(pins.J6_9);
  delay(250);
  medioex.digitalSetLow(pins.J6_9);
  medioex.digitalSetHigh(pins.J6_10);
  delay(250);
  medioex.digitalSetLow(pins.J6_10);
  medioex.digitalSetHigh(pins.J6_11);
  delay(250);
  medioex.digitalSetLow(pins.J6_11);
  medioex.digitalSetHigh(pins.J6_12);
  delay(250);
  medioex.digitalSetLow(pins.J6_12);
}
