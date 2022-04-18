// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// Original implementation
function maxChar(str) {
   const chars = {};
   let max = 0;

   // for each char in string, if the character doesn't exist in the object chars
   // then add it and set its value to one; else increment the value of that char (key) by one
   for (let char of str) {
      if (!chars[char]) {
         chars[char] = 1;
      } else {
         chars[char]++;
      }
   }

   // find max of the keys now found in chars
   for (let key in chars) {
      if (chars[key] > max) {
         max = key;
      }
   }

   return max; // key of max value
}

// Alternative implementation
function maxCharAlt(str) {
   const chars = {};

   for (let char of str) {
      if (!chars[char]) 
        chars[char] = 1;
      else 
        chars[char]++;
   }

   // Calls reduce on the keys in 'chars' even though the function has access
   // to the entire object, hence is able to compare chars[curr] to chars[prev]
   let max = Object.keys(chars).reduce(function (prev, curr) {
      return chars[curr] > chars[prev] ? curr : prev;
   });

   return max; // key of max value
}

module.exports = maxChar;
