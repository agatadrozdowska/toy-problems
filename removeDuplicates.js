//Given a sorted array nums, remove the duplicates in-place such that each element
//appear only once and return the new length.

//Do not allocate extra space for another array, you must do this by modifying
//the input array in-place with O(1) extra memory.

var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return 1;
  }

  let currUnique = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[currUnique]) {
      nums[currUnique + 1] = nums[i];
      currUnique++;
    }
  }
  return currUnique + 1;
};
