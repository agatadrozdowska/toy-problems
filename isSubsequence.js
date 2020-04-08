//Write a function called isSubsequence which takes in two and checks whether the characters in the first string form a subsequence of the characters in the second string.

//isSubsequence('abc', 'acb') -> false
//isSubsequence('sing', 'sting') -> true
//isSubsequence('hello', 'hello world') -> true
//isSubsequence('abc', 'abracadabra') -> true

function isSubsequence(string1, string2) {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 <= string2.length) {
    if (pointer1 === string1.length) {
      return true;
    }

    if (string2[pointer2] === string1[pointer1]) {
      pointer1++;
    }
    pointer2++;
  }
  return false;
}
