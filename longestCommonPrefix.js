// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

var longestCommonPrefix = function (strs) {
  let prefix = "";

  if (strs.length === 0) {
    return "";
  }

  if (strs.length === 1) {
    return strs[0];
  }

  for (let i = 0; i < strs[0].length; i++) {
    let currLetter = strs[0][i];

    for (var j = 1; j < strs.length; j++) {
      let currWord = strs[j];
      if (i > currWord.length || currWord[i] !== currLetter) {
        return prefix;
      }
    }
    prefix += currLetter;
  }
  return prefix;
};
