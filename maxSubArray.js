//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//Example:
//Input: [-2,1,-3,4,-1,2,1,-5,4],
//Output: 6
//Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function (nums) {
  let max = -Infinity;
  let curr = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      curr += nums[j];
      max = Math.max(curr, max);
    }
    curr = 0;
  }
  return max;
};
