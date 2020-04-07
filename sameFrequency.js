//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits

//sameFrequency(182, 281) -> true
//sameFrequency(34, 14) -> false
//sameFrequency(22, 222) -> false

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  let obj1 = {};
  let obj2 = {};

  if (num1.length !== num2.length) {
    return false;
  }

  for (let i = 0; i < num1.length; i++) {
    if (obj1.hasOwnProperty(num1[i])) {
      obj1[num1[i]]++;
    } else {
      obj1[num1[i]] = 1;
    }

    if (obj2.hasOwnProperty(num2[i])) {
      obj2[num2[i]]++;
    } else {
      obj2[num2[i]] = 1;
    }
  }

  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
