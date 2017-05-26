function delay(ms) {
  var time = new Date().getTime();
  while(new Date().getTime() < time + ms) {}
}

var medioex = require("../index.js");

medioex.analogOutputInit();

var i = 0;

console.log("Analog output test program starting");
while(true) {
  medioex.analogWriteValue(medioex.pins.analog.output.J1_1, i);
  medioex.analogWriteValue(medioex.pins.analog.output.J1_2, i);
  medioex.analogWriteValue(medioex.pins.analog.output.J1_3, i);
  medioex.analogWriteValue(medioex.pins.analog.output.J1_4, i);
  i += 100;
  if(i > 4095)
  {
    i = 0;
  }

  delay(1000);
}
