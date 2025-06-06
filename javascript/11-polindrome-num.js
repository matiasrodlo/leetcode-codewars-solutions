/* Problem
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true

Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome */

function polindrome(num) {
  if (num == num.toString().split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(polindrome(202)); // true
