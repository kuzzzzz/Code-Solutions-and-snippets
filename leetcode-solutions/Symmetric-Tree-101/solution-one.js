var isSymmetric = function (root, leftNode = root, rightNode = root) {
  // The first two if statements handle our base case.
  if (!leftNode && !rightNode) return true; // If both nodes are null, they are equal. Return true.
  if (!leftNode || !rightNode) return false; // If only one node is null, they are not equal. Return false.
  if (leftNode.val !== rightNode.val) return false; // If the values of the two nodes are not equal, return false

  return (
    isSymmetric(leftNode.left, rightNode.right) &&
    isSymmetric(leftNode.right, rightNode.left)
  ); // Recursively run the function on both sides of the binary tree. Return the result of both functions.
  // Both functions need to return true in order to be considered symmetric
};
