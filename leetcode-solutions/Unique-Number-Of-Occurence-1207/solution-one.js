debugger
var uniqueOccurrences = function (arr) {
  let x = {};

  for (let n of arr) {
    if (x[n] == undefined) {
      x[n] = 1;
    } else {
      x[n] = x[n] + 1;
    }
  }

  let z = {};
  for (let k in x) {
    let ct = x[k];
    if (z[ct] == undefined) {
      z[ct] = k;
    } else {
      return false;
    }
  }

  return true;
};

//TEst
let test1 = uniqueOccurrences([1, 2, 2, 1, 1, 3])
let test2 = uniqueOccurrences([1, 2])
let test3 = uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]);