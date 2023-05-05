/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let _max = 0;
  const sz = s.length;
  const vowels = new Set("aeiou");

  let start = 1;
  let end = k;

  for (let i = 0; i < k; ++i) {
    if (vowels.has(s[i])) ++_max;
  }

  let count = _max;
  while (end < sz) {
    if (vowels.has(s[start - 1])) --count;
    if (vowels.has(s[end])) ++count;

    _max = Math.max(_max, count);
    ++start;
    ++end;
  }

  return _max;
};
