/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function validPath(n, edges, source, destination) {
  const graph = new Graph();
  graph.create(edges);
  return graph.doesPathExist(source, destination);
}

class Graph {
  constructor() {
    this.adjList = new Map(); // SC: O(V + 2 * E)
  }
  create(edges) {
    // O(E)
    edges.forEach(([s, d]) => {
      const cxnS = this.adjList.has(s) ? this.adjList.get(s) : [];
      cxnS.push(d);
      this.adjList.set(s, cxnS);

      const cxnD = this.adjList.has(d) ? this.adjList.get(d) : [];
      cxnD.push(s);
      this.adjList.set(d, cxnD);
    });
  }
  doesPathExist(source, destination) {
    // O(V + E)
    const visited = new Set(); // SC: O(V)
    const stack = new Stack();
    stack.push(source);
    while (!stack.isEmpty()) {
      const vertex = stack.pop();
      if (vertex === destination) {
        return true;
      }
      visited.add(vertex);
      const cxns = this.adjList.has(vertex) ? this.adjList.get(vertex) : [];
      for (let i = 0; i < cxns.length; ++i) {
        const cxn = cxns[i];
        if (!visited.has(cxn)) {
          stack.push(cxn);
        }
      }
    }
    return false;
  }
}
class Stack {
  constructor() {
    this.data = [];
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    return this.data.pop();
  }
  isEmpty() {
    return this.data.length === 0;
  }
}
