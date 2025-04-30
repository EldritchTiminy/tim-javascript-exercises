const reverseString = function(word) {
  let forword = word;
  let reversed = "";
  for (let i=0;i<forword.length;i++) {
    reversed += forword[forword.length - 1 - i];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
