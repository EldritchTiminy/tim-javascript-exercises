const palindromes = function (str1) {
  let filteredString = str1.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let flipString = filteredString.split('').reverse().join('');
  if (flipString === filteredString) {
    return true;
  } else {
    return false;
  };
};

// Do not edit below this line
module.exports = palindromes;