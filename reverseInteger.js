//Given a 32-bit signed integer, reverse digits of an integer.

var reverse = function (x) {
  let result = 0;
  let absx = Math.abs(x);

  while (absx > 0) {
    result = result * 10 + (absx % 10);
    absx = Math.floor(absx / 10);
  }

  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) return 0;

  if (x > 0) {
    return result;
  } else {
    return -result;
  }
};
