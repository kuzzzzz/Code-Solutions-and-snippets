// Javascript implementation of the approach

// Representation of a node

class Node {
  constructor() {
    var val;
    var next;
  }
}

// Function to insert node
function insert(root, item) {
  var temp = new Node();
  var ptr;
  temp.val = item;
  temp.next = null;

  if (root == null) root = temp;
  else {
    ptr = root;
    while (ptr.next != null) ptr = ptr.next;
    ptr.next = temp;
  }
  return root;
}
// You can also use a loop to create a link list instead of a recurssive call
function createList(arr, n) {
  var root = null;
  for (let i = 0; i < n; i++) root = insert(root, arr[i]);
  return root;
}

// Driver Code
module.exports = {
  createList,
};
