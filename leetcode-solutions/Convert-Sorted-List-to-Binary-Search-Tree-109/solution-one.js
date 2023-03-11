var sortedListToBST = function (head) {
  if (!head) return null;
  let arr = [];
  // convert linked list to array
  while (head != null) {
    arr.push(head.val);
    head = head.next;
  }

  var buildTree = function (left, right) {
    if (left > right) return null;
    let mid = left + Math.floor((right - left) / 2);
    // note that use you use floor or ceil
    // let mid = left + Math.ceil( (right - left) / 2);
    let midVal = arr[mid];
    let node = new TreeNode(midVal);
    if (left == right) return node;
    node.left = buildTree(left, mid - 1);
    node.right = buildTree(mid + 1, right);
    return node;
  };
  return buildTree(0, arr.length - 1);
};
