/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

function binarySearch(array, target) {
  function recursive(array, index, target) {
    const currentIndex = Math.floor(array.length / 2);
    index = index + currentIndex;

    if (array.length === 0) {
      return null;
    }

    if (array[currentIndex] === target) {
      return index;
    }

    if (target > array[currentIndex]) {
      return recursive(array.slice(currentIndex + 1), index + 1, target);
    }

    if (target < array[currentIndex]) {
      return recursive(
        array.slice(0, currentIndex),
        index - currentIndex,
        target
      );
    }
  }
  return recursive(array, 0, target);
}
