var leafSimilar = function (root1, root2) {
  const l1 = [];
  const l2 = [];

  function getLeafVals(root, arr) {
    if (root === null) {
      return null;
    }
    if (root.left === null && root.right === null) {
      arr.push(root.val);
    }
    getLeafVals(root.left, arr);
    getLeafVals(root.right, arr);
  }

  getLeafVals(root1, l1);
  getLeafVals(root2, l2);

  if (l1.length !== l2.length) {
    return false;
  }

  for (let i = 0; i < l1.length; i++) {
    if (l1[i] !== l2[i]) {
      return false;
    }
  }

  return true;
};
