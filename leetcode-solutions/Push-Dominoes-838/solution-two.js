debugger;
function pushDominoes(dominoes) {
  let N = dominoes.length;
  let indexes = new Array(N + 2),
    symbols = new Array(N + 2);
  let len = 1;
  indexes[0] = -1;
  symbols[0] = "L";

  for (let i = 0; i < N; ++i)
    if (dominoes.charAt(i) != ".") {
      indexes[len] = i;
      symbols[len++] = dominoes.charAt(i);
    }

  indexes[len] = N;
  symbols[len++] = "R";

  let ans = dominoes.split("");
  for (let index = 0; index < len - 1; ++index) {
    let i = indexes[index],
      j = indexes[index + 1],
      x = symbols[index],
      y = symbols[index + 1];

    if (x == y) {
      for (let k = i + 1; k < j; ++k) ans[k] = x;
    } else if (x > y) {
      // RL
      for (let k = i + 1; k < j; ++k)
        ans[k] = k - i == j - k ? "." : k - i < j - k ? "R" : "L";
    }
  }
  console.log(ans.join(""));
}


//Test Cases
pushDominoes(".L.R...LR..L..");
pushDominoes("RR.L");
// pushDominoes(".L.R...LR..L..");
