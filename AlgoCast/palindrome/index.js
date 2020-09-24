// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution 1
// function palindrome(str) {
//   return str == str.split("").reverse().join("");
// }

// solution #2, not efficient because performs twice comparisons, but was interesting see this solution
function palindrome(str) {
  return str.split("").every((char, i) => char == str[str.length - i - 1]);
}

module.exports = palindrome;
