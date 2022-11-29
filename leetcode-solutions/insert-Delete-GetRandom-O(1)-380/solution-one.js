var RandomizedSet = function () {
  this.pip = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.pip.has(val)) {
    return false;
  } else {
    this.pip.add(val);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.pip.has(val)) {
    this.pip.delete(val);
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let dick = Array.from(this.pip);

  // there's no garauntee that this code will pass this test again
  // becuase it's random lol
  return dick[Math.floor(Math.random() * dick.length)];
};
