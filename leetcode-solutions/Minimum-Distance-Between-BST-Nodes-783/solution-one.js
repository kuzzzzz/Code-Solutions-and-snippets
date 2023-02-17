var minDiffInBST = function (root) {
  let min = Number.MAX_VALUE;
  let prev = Number.MAX_VALUE;

  const getMin = function (node) {
    if (node == null) {
      return;
    }

    getMin(node.right);
    if (min > prev - node.val) {
      min = prev - node.val;
    }
    prev = node.val;
    getMin(node.left);
  };

  getMin(root);
  return min;
};
