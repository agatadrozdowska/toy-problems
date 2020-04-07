//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

//areThereDuplicates(1, 2, 3) -> false
//areThereDuplicates(1, 2, 2) -> true
//areThereDuplicates('a', 'b', 'c', 'a') -> true

function areThereDuplicates(...args) {
  let first = 0;
  let next = 1;

  args.sort();

  while (next < args.length) {
    if (args[first] === args[next]) {
      return true;
    }
    first++;
    next++;
  }
  return false;
}
