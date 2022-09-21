debugger;
var sumEvenAfterQueries = function (A, queries) {
  let S = 0;
  for (let x of A) if (x % 2 == 0) S += x;

  let ans = new Array(queries.length);

  for (let i = 0; i < queries.length; ++i) {
    let val = queries[i][0],
      index = queries[i][1];
    if (A[index] % 2 == 0) S -= A[index];
    A[index] += val;
    if (A[index] % 2 == 0) S += A[index];
    ans[i] = S;
  }

  return ans;
};



//Test cases

sumEvenAfterQueries(
  [1, 2, 3, 4],
  [
    [1, 0],
    [-3, 1],
    [-4, 0],
    [2, 3],
  ]
);

sumEvenAfterQueries([1], [[4, 0]]);
