const removeFromArray = function (arr, ...items) {
  // const index = arr.indexOf(item);
  // arr.splice(index, 1);
  // return arr;

  return arr.filter(el => !items.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
