//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1, 1, 1, 1, 2]) -> 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) -> 7
// countUniqueValues([]) -> 0
// countUniqueValues([-2, -1, -1, 0, 1]) -> 4

function countUniqueValues(array) {
  if (array.length === 0) {
    return 0;
  }

  let counter = 1;
  let first = 0;
  let second = 1;

  while (second < array.length) {
    if (array[first] !== array[second]) {
      counter++;
      first = second;
    }
    second++;
  }
  return counter;
}
