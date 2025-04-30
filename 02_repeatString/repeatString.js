const repeatString = function(str1, rep1) {
  if (rep1 < 0) {
    return "ERROR";
  }
  let string1 = str1;
  let string2 = "";
  for (let i = 0;i < rep1;i++) {
    string2 = string2 + string1;
  }
  return string2;
};

// Do not edit below this line
module.exports = repeatString;
