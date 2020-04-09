//Write a function findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

//findLongestSubstring('') -> 0
//findLongestSubstring('thisisawesome') -> 6
//findLongestSubstring('thecatinthehat') -> 7
//findLongestSubstring('bbbbbbb') -> 1
//findLongestSubstring('longestsubstring') -> 8
//findLongestSubstring('thisishowwedoit') -> 6

function findLongestSubstring(string) {
  let start = 0;
  let obj = {};
  let maxLength = 0;
  let tempLength = 0;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (obj[char]) {
      start = Math.max(start, obj[char]);
    }
    tempLength = i - start + 1;
    maxLength = Math.max(maxLength, tempLength);
    obj[char] = i + 1;
  }
  return maxLength;
}
