

var pathSum = function (root, targetSum) {
  if (!root) return [];
  let runs = 0;
  const results = [];
  const findPath = (node, sum, path) => {
    sum = sum - node.val;

    if (sum == 0 && !node.left && !node.right) {
      results.push(path);

      return;
    }

    if (node.left) findPath(node.left, sum, [...path, node.left.val]);
    if (node.right) findPath(node.right, sum, [...path, node.right.val]);
  };

  findPath(root, targetSum, [root.val]);

  return results;
};

//Test cases 
// you have to craete a binaray tree with this array to run the test case
// To find the all the paths that sum up to 22
[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
22;