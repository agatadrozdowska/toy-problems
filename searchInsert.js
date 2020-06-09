// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.
// Example 1:
// Input: [1,3,5,6], 5
// Output: 2
// Example 2:
// Input: [1,3,5,6], 2
// Output: 1

var searchInsert = function (nums, target) {
  if (target < nums[0]) {
    return 0;
  }

  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || target < nums[i]) {
      return i;
    }
  }
};
