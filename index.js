'use strict';

var node = require('./build/Release/medioex-io');

(function(){
  var digitalOutput = Object.freeze({
    J4_4 : 0,
    J4_3 : 1,
    J4_2 : 2,
    J4_1 : 3,

    J3_4 : 4,
    J3_3 : 5,
    J3_2 : 6,
    J3_1 : 7,

    J6_12 : 8,
    J6_11 : 9,
    J6_10 : 10,
    J6_9 : 11,

    J5_8 : 12,
    J5_7 : 13,
    J5_6 : 14,
    J5_5 : 15
  }); 

  var digitalInput = Object.freeze({
    J17_1 : 16,
    J17_2 : 20,
    J17_3 : 21,
    J17_4 : 26,

    J16_5 : 19,
    J16_6 : 13,
    J16_7 : 6,
    J16_8 : 5,
    
    J15_9 : 22,
    J15_10 : 12,
    J15_11 : 27,
    J15_12 : 17,

    J14_13 : 4,
    J14_14 : 23,
    J14_15 : 24,
    J14_16 : 18
  });

  var analogOutput = Object.freeze({
    J1_1 : 0,
    J1_2 : 1,
    J1_3 : 2,
    J1_4 : 3
  }); 
  
  var analogInput = Object.freeze({
    J13_1 : 0,
    J13_2 : 1,
    J13_3 : 2,
    J13_4 : 3
  });

  var digital = Object.freeze({
    output : digitalOutput,
    input : digitalInput
  });

  var analog = Object.freeze({
    output : analogOutput,
    input : analogInput
  });

  node.pins = Object.freeze({
    digital : digital,
    analog : analog
  });

  node.convertAnalogToDigital = function(value){
    return parseInt((4095.0 / 10.0) * value)
  };
  
  node.convertDigitalToAnalog = function(value){
    return (10.0 / 4095.0) * value;
  };

  node.analogGetValueAsDigital = function(pin) {
    return node.convertAnalogToDigital(node.analogGetValue(pin));
  };

  node.analogWriteValueWithDigital = function(pin, value) {
    node.analogWriteValue(pin, node.convertDigitalToAnalog(value));
  };
})();

module.exports = node;
