/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  const unSortedObject = {};
  const array = [];

  for (let i = 0; i < string.length; i++) {
    if (unSortedObject.hasOwnProperty(string[i])) {
      unSortedObject[string[i]]++;
    } else {
      unSortedObject[string[i]] = 1;
    }
  }

  for (let key in unSortedObject) {
    array.push([key, unSortedObject[key]]);
  }

  array.sort(sortingFunction);
  return array;
};

function sortingFunction(val1, val2) {
  if (val1[1] === val2[1]) {
    if (val1[0] < val2[0]) {
      return -1;
    } else if (val1[0] > val2[0]) {
      return 1;
    }
  }
  return val2[1] - val1[1];
}
