// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values than sum to zero or undefined if the pair does not exist.

//sumZero([-3, -2, -1, 0, 1, 2, 3]) -> [-3, 3]
//sumZero([-2, 0, 1, 3]) -> undefined
//sumZero([1, 2, 3]) -> undefined

function sumZero(array) {
  let first = 0;
  let last = array.length - 1;

  while (last > first) {
    if (array[first] + array[last] === 0) {
      return [array[first], array[last]];
    } else if (array[first] + array[last] > 0) {
      last--;
    } else {
      first++;
    }
  }
  return undefined;
}
