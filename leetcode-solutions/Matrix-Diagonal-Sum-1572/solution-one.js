var diagonalSum = function (mat) {
  let g = 0;
  for (let x = 0; x < mat.length; x++) {
    g += mat[x][mat.length - 1 - x] + mat[x][x + 1 - 1];
  }

  if (mat.length % 2 !== 0) {
    let r = Math.floor(mat.length / 2);
    g -= mat[r][r];
    console.log(mat[r][r]);
  }
  return g;
};
