var Trie = function() {
  this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  for (const c of word) {
    if (!(c in node)) {
      node[c] = {};
    }
    node = node[c];
  }
  node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root;
  for (const c of word) {
    if (!(c in node)) {
      return false;
    }
    node = node[c];
  }
   // console.log(node)
  return 'isWord' in node;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for (const c of prefix) {
    if (!(c in node)) {
      return false;
    }
    node = node[c];
  }
    
  return true;
};