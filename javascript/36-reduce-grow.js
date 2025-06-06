/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

function grow(x) {
  result = 1;

  for (let i = 0; i < x.length; i++) {
    result = result * x[i];
  }
  return result;
}

grow([1, 2, 3, 4]);
