// Javascript implementation of the approach
debugger;
// Representation of a node
let root = null;

class Node {
  constructor() {
    var data;
    var next;
  }
}

// Function to insert node
function insert(arr, n) {
  var temp = new Node();
  var ptr;
  temp.data = arr[n];
  temp.next = null;

  if (n < arr.length) {
    if (root == null) root = temp;
    else {
      ptr = root;
      while (ptr.next != null) ptr = ptr.next;
      ptr.next = temp;
    }
    insert(arr, 1 + n);
  } else {
    return root;
  }
}
// You can also use a loop to create a link list instead of a recurssive call
// function arrayToList(arr, n) {
//   var root = null;
//   for (let i = 0; i < n; i++) root = insert(root, arr[i]);
//   return root;
// }

// Driver Code
let arr = [1, 2, 3, 4, 5];
insert(arr, 0);

console.log(root);
