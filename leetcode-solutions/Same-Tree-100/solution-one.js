var isSameTree = function (p, q) {
  let count = 0;
  let nodes = 0;
  const dig = (node1, node2) => {
    if (!node1 && !node2) return;

    if (node1?.val == node2?.val) {
      nodes++;
      count++;
    } else {
      nodes--;
    }

    dig(node1?.left, node2?.left);
    dig(node1?.right, node2?.right);
  };
  dig(p, q);
  return nodes == count;
};
