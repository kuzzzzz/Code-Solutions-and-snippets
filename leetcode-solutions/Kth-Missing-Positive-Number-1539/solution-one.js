var findKthPositive = function (arr, k) {
  let count = 0;
  let v = [];

  for (let x = 1; x <= arr.length + k; x++) {
    if (arr.indexOf(x) >= 0) continue;
    count++;

    v.push(x);
    if (count === k) {
      return v[k - 1];
    }
  }
};
