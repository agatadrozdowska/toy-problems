var romanToInt = function (string) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let integer = 0;

  for (let i = 0; i < string.length; i++) {
    let first = string[i];
    let second = string[i + 1];

    if (obj[first] >= obj[second]) {
      integer += obj[first];
    } else if (second === undefined) {
      integer += obj[first];
    } else {
      integer += obj[second] - obj[first];
      i++;
    }
  }
  return integer;
};
