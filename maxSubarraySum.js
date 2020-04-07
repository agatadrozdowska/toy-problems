//Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function shuold calculate the maximum sum of n consecutive elements in the array.

//maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) -> 10
//maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) -> 17
//maxSubarraySum([4, 2, 1, 6], 1) -> 6
//maxSubarraySum([], 4)

// function maxSubarraySum(array, n) {
//   let max = -Infinity;

//   if (array.length < n) {
//     return null;
//   }

//   for (let i = 0; i < array.length - n + 1; i++) {
//     let sum = 0;
//     for (let j = 0; j < n; j++) {
//       sum += array[i + j];
//     }
//     if (sum > max) {
//       max = sum;
//     }
//   }
//   return max;
// }

function maxSubarraySum(array, n) {
  let max = 0;
  let current = 0;

  if (array.length < n) {
    return null;
  }

  for (let i = 0; i < n; i++) {
    max += array[i];
  }
  current = max;

  for (let j = n; j < array.length; j++) {
    current = current + array[j] - array[j - n];
    max = Math.max(max, current);
  }

  return max;
}
