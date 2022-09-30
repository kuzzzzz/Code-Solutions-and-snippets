debugger
var getSkyline = function (buildings) {
  // store all candidate x-positions
  let cp = new Set();
  for (let [l, r, h] of buildings) {
    cp.add(l);
    cp.add(r);
  }
  let cp1 = [...cp];
  cp1.sort((a, b) => a - b);

  // find the height for every candidate x-position
  let n = buildings.length;
  let res = [];
  for (let p of cp1) {
    let i = 0;
    let height = 0;
    while (i < n && buildings[i][0] <= p) {
      if (buildings[i][1] > p) {
        height = Math.max(height, buildings[i][2]);
      }
      i++;
    }
    if (res.length && res[res.length - 1][1] === height) continue;
    res.push([p, height]);
  }

  return res;
};

//Test case

getSkyline([
  [2, 9, 10],
  [3, 7, 15],
  [5, 12, 12],
  [15, 20, 10],
  [19, 24, 8],
]);
getSkyline([
  [0, 2, 3],
  [2, 5, 3],
]);

// Output 
// [
//   [2, 10],
//   [3, 15],
//   [7, 12],
//   [12, 0],
//   [15, 10],
//   [20, 8],
//   [24, 0],
// ][([0, 3], [5, 0])];
