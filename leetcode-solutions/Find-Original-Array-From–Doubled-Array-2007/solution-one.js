var findOriginalArray = function (changed) {
  
  if (changed.length % 2) return [];

  let maxNum = Math.max(...changed);
  let freq = new Array(maxNum + 1).fill(0);
  for (let num of changed) {
    freq[num] += 1;
  }

  let res = [];

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] === 0) continue;
    let next = i * 2;
    while (freq[i] > 0 && freq[next] > 0) {
      res.push(i);
      freq[next] -= 1;
      freq[i] -= 1;
    }

    if (freq[i] !== 0) {
      return [];
    }
  }
  
  return res.length === changed.length / 2 ? res : [];
};

findOriginalArray([2, 3, 5, 3, 2, 2]);
findOriginalArray([2, 3, 5, 10, 4, 6]);
