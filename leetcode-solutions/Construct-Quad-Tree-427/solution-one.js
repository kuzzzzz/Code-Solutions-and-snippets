var construct = function (grid) {
  return helper(grid, 0, 0, grid.length);

  function helper(grid, x, y, len) {
    if (len === 1) {
      return new Node(grid[x][y], true, null, null, null, null);
    }
    let node = new Node();
    let topLeft = helper(grid, x, y, len / 2);
    let topRight = helper(grid, x, y + len / 2, len / 2);
    let bottomLeft = helper(grid, x + len / 2, y, len / 2);
    let bottomRight = helper(grid, x + len / 2, y + len / 2, len / 2);
    if (
      topLeft.isLeaf &&
      topRight.isLeaf &&
      bottomLeft.isLeaf &&
      bottomRight.isLeaf &&
      topLeft.val === topRight.val &&
      topRight.val === bottomLeft.val &&
      bottomLeft.val === bottomRight.val
    ) {
      node.val = topLeft.val;
      node.isLeaf = true;
    } else {
      node.topLeft = topLeft;
      node.topRight = topRight;
      node.bottomLeft = bottomLeft;
      node.bottomRight = bottomRight;
    }
    return node;
  }
};
