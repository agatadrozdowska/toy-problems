//Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

//If the last word does not exist, return 0.

//Note: A word is defined as a maximal substring consisting of non-space characters only.

//Example:

//Input: "Hello World"
//Output: 5

var lengthOfLastWord = function (s) {
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      length++;
    } else {
      if (s[i + 1] && s[i + 1].match(/[A-Za-z]/)) {
        length = 0;
      }
    }
  }
  return length;
};
