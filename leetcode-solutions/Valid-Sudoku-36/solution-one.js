var isValidSudoku = function (b) {
  const set = new Set();
  for (let r = 0; r < b.length; r++) {
    for (let c = 0; c < b[r].length; c++) {
      if (b[r][c] === ".") continue;
      const col = Math.floor(c / 3);
      const row = Math.floor(r / 3);
      if (
        set.has(`row-${r}-${b[r][c]}`) ||
        set.has(`col-${c}-${b[r][c]}`) ||
        set.has(`box-${col * 3 + row}-${b[r][c]}`)
      )
        return false;
      set.add(`row-${r}-${b[r][c]}`);
      set.add(`col-${c}-${b[r][c]}`);
      set.add(`box-${col * 3 + row}-${b[r][c]}`);
    }
  }

  return true;
};
