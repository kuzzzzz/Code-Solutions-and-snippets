var spiralOrder = function (matrix) {
  let spiralMatrix = [];
  while (matrix.length) {
    let top = matrix.shift();
    spiralMatrix.push(...top);
    for (let item of matrix) {
      let last = item.pop();
      if (last) {
        spiralMatrix.push(last);
        item.reverse();
      }
    }
    matrix.reverse();
  }
  return spiralMatrix;
};
