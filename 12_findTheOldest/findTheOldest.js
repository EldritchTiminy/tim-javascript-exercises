const findTheOldest = function(arr1) {
  let oldest = arr1[0];
  let objAge;
  let oldestAge;
  let date = new Date();
  let currentYear = date.getFullYear();
  if (oldest.yearOfBirth && oldest.yearOfDeath) {
    oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
  } else if (oldest.yearOfBirth) {
    oldestAge = currentYear - oldest.yearOfBirth;
  } else {
    console.log("Error: Insufficient Data");
  };

  for (let obj of arr1) {
    if (obj.yearOfBirth && obj.yearOfDeath) {
      objAge = obj.yearOfDeath - obj.yearOfBirth;
    } else if (obj.yearOfBirth) {
      objAge = currentYear - obj.yearOfBirth;
    } else {
      console.log("Error: Insufficient Data");
    };
    if (objAge > oldestAge) {
      oldest = obj;
      oldestAge = objAge;
    }
  };
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
