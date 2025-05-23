const fibonacci = function(in1) {
  let fibSeq = [0];
  let sequencer = 1;
  if (in1 < 0) {
    return "OOPS";
  } else {
    for (let counter = 0; counter < in1; counter++) {
      fibSeq.push(sequencer);
      sequencer += fibSeq[counter];
    };
    return fibSeq[in1];
  };
};

// Do not edit below this line
module.exports = fibonacci;
