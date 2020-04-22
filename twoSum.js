// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// var twoSum = function(nums, target) {
//     for (i = 0; i < nums.length; i++) {
//         for (j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

var twoSum = function (nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let result = target - nums[i];
    if (obj.hasOwnProperty(result) && obj[result] !== i) {
      return [i, obj[result]];
    }
  }
};
