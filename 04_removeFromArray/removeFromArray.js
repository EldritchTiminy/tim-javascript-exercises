const removeFromArray = function(array, ...remove) {
  let filteredArray = array;
  let i = 0;
  while (remove[i]) {
    for (let j=0;j<filteredArray.length;j++) {
      if (filteredArray[j] === remove[i]) {
        filteredArray.splice(j, 1);
        j--
      }
    }
    i++
  }
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
