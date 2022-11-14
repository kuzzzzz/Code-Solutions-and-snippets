debugger;
var removeStones = function (stones) {
  const rows = new Map();
  const cols = new Map();

  for (const [r, c] of stones) {
    rows.set(r, (rows.get(r) || new Set()).add(c));
    cols.set(c, (cols.get(c) || new Set()).add(r));
  }

  const visited = new Set();

  const visit = (i, j) => {
    const key = `${i}-${j}`;
    if (visited.has(key)) return;
    visited.add(key);
    const adjRow = rows.get(i);
    for (const col of adjRow) {
      visit(i, col);
    }
    const adjCol = cols.get(j);
    for (const row of adjCol) {
      visit(row, j);
    }
  };

  let remainingStones = 0;

  for (const [r, c] of stones) {
    const key = `${r}-${c}`;
    if (visited.has(key)) continue;
    visit(r, c);
    remainingStones++;
  }

  return stones.length - remainingStones;
};

//Test Cases

let test1 = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 2],
  [2, 1],
  [2, 2],
];
let test2 = [
  [0, 0],
  [0, 2],
  [1, 1],
  [2, 0],
  [2, 2],
];

let test3 = [[0, 0]];

let res1 = removeStones(test1)
let res2 = removeStones(test2)
let res3 = removeStones(test3)

console.log(res1)
console.log(res2)
console.log(res3)


