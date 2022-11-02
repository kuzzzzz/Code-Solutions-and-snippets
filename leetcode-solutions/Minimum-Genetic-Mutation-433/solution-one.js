debugger;

const minMutation = (s, t, bank) => minDisMap(s, t, bank);

let d = ["A", "C", "G", "T"];
const minDisMap = (s, t, bank) => {
  let dis = new Map(),
    q = [s],
    se = new Set(bank);
  dis.set(s, 0); // initialize starting point distance
  while (q.length) {
    let cur = q.shift(),
      n = cur.length,
      curD = dis.get(cur);
    for (let i = 0; i < n; i++) {
      // loop for all possible mutations by changing ith char
      for (const c of d) {
        if (c == cur[i]) continue; // same char not mutation
        let next = cur.slice(0, i) + c + cur.slice(i + 1); // modify one char, next mutation
        if (!se.has(next)) continue;
        if (!dis.has(next) || dis.get(next) > curD + 1) {
          // update min distance
          dis.set(next, curD + 1);
          q.push(next);
        }
      }
    }
  }
  return dis.has(t) ? dis.get(t) : -1;
};

//Test Cases
minDisMap("AACCGGTT", "AACCGGTA", ["AACCGGTA"]);
minDisMap("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"]);
minDisMap("AAAAACCC", "AACCCCCC", ["AAAACCCC", "AAACCCCC", "AACCCCCC"]);
