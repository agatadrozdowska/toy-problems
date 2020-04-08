//Write a function called averagePair. Given a sorted array of integers and and a target average, determine if there is a pair of values in the array where the average of the pairs equals the target average. There may be more than one pair that matches the average target.

//averagePair([1, 2, 3], 2.5) -> true
//averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) -> true
//averagePair([-1, 0, 3, 4, 5, 6], 4.1) -> false
//averagePair([], 4) -> false

// function averagePair(array, average) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (var j = i + 1; j < array.length; j++) {
//       let currAverage = (array[i] + array[j]) / 2
//       if (currAverage === average) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

function averagePair(array, average) {
  let first = 0;
  let last = array.length - 1;

  while (first < last) {
    let currAverage = (array[first] + array[last]) / 2;
    if (currAverage === average) {
      return true;
    } else if (currAverage < average) {
      first++;
    } else if (currAverage > average) {
      last--;
    }
  }
  return false;
}

averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
