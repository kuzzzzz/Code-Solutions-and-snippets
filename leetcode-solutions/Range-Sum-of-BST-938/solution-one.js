const rangeSumBST = (root, L, R) => {
  if (root === null) {
    return 0;
  }

  return (
    (root.val >= L && root.val <= R ? root.val : 0) +
    rangeSumBST(root.left, L, R) +
    rangeSumBST(root.right, L, R)
  );
};
