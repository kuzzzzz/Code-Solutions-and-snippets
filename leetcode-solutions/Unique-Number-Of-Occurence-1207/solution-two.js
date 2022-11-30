var uniqueOccurrences = function (arr) {
  let kk = new Map();

  for (let x of arr) {
    if (kk.get(+x) == undefined) {
      kk.set(+x, 1);
    } else {
      kk.set(+x, kk.get(+x) + 1);
    }
  }
  let ff = new Set([...arr]);
  let rr = new Set([...kk.values()]);
  return rr.size === ff.size;
};

// Original first solution 