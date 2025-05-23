const add = function(in1, in2) {
	return (in1 + in2);
};

const subtract = function(in1, in2) {
	return (in1 - in2);
};

const sum = function(ar1) {
  let sum = 0;
	for (const number of ar1) {
    sum += number;
  };
  return sum;
};

const multiply = function(ar1) {
  let product = 1;
  for (const number of ar1) {
    product *= number;
  };
  return product;
};

const power = function(in1, in2) {
	let product = in1;
  for (let counter = 1; counter < in2; counter++) {
    product *= in1;
  };
  return product;
};

const factorial = function(in1) {
  let product = in1;
  let multiplier = in1;
  if (product <= 1) {
    return 1;
  } else {
    while (multiplier > 1) {
      multiplier -= 1;
      product *= multiplier;
    }
    return product;
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
