var countOdds = function (low, high) {
  let j = 0;
  for (let x = low; x <= high; x++) {
    if (x % 2 !== 0) {
      j += 1;
    }
  }
  return j;
};
