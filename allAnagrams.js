/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function(string) {
  const result = {};

  function recursive(lettersSoFar, input) {
    if (lettersSoFar.length === string.length) {
      result[lettersSoFar] = 1;
    }

    for (let i = 0; i < input.length; i++) {
      recursive(
        lettersSoFar + input[i],
        input.slice(0, i) + input.slice(i + 1)
      );
    }
  }
  recursive("", string);
  return Object.keys(result);
};
