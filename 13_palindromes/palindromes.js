const palindromes = function (str) {
  const split = str.replace(/[^\w]/g, '').toLowerCase().split('');
  const len = split.length;

  for (let i = 0, j = len - 1; i < j; i++, j--) {
    if (split[i] !== split[j]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
