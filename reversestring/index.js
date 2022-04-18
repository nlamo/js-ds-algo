// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// my solution
// iterating from the last character to the first, adding them to a new string in that order
function reverse(str) {
   let newString = '';

   for (let i = str.length - 1; i >= 0; --i) {
      newString += str[i];
   }

   return newString;
}

// Grider's solution
function reverseAlt(str) {
   const arr = str.split('');
   arr.reverse();
   return arr.join('');
}

// Grider's solution (2)
function reverseAltSecond(str) {
   let reversed = '';

   for (let character of str) {
      reversed = character + reversed;
   }

   return reversed;
}

// Grider's solution (3)
function reverseAltThird(str) {
   return str.split('').reduce((reversed, character) => {
       return character + reversed;
   }, '');
}
module.exports = reverse;
