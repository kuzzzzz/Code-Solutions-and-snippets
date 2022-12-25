var answerQueries = function (n, q) {
  n.sort((a, b) => a - b);
  let res = [];
  for (let x = 0; x < q.length; x++) {
    let sum = 0;
    let count = 0;
    for (let j = 0; j < n.length; j++) {
      sum += n[j];
      if (sum > q[x]) break;
      count += 1;
    }
    res.push(count);
  }
  return res;
};


// Solved this on my first try although it's an 
// easy question it always feels good 
