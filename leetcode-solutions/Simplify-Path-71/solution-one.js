/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let s = [];
  let sp = path.split('/').filter((a) => a !== '' && a !== '.');
  for (let i = 0; i < sp.length; i++) {
    if (sp[i] === '..') {
      s.pop();
    } else {
      s.push(sp[i]);
    }
  }
  return '/' + s.join('/');
};