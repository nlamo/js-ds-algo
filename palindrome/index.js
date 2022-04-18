// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// My solution

/* Checks first and last char for equality, and if equal, then it increments the first
 * and decrements the last. If at any point there isn't equality, it's not a palindrome.
 * Once i <= j (it has reached middle character or the iterators have passed each other),
 * then it returns true
 */

function palindrome(str) {
    
   for (let i = 0, j = str.length - 1; i <= j; ++i, --j) {
      if (str[i] != str[j]) {
         return false;
      }
   }

   return true;
}

// Grider's solution
function palindromeAlt(str) {
    const reversed = str.split('').reverse().join('');

    return str === reversed;
}

module.exports = palindrome;
