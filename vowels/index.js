// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// My implementation, also very similar to one Grider provides
function vowels(str) {

    let vowelCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newString = str.toLowerCase();
 
    for (let char of newString) {
        if (vowels.includes(char)) {
            ++vowelCount;
        }
    }

    return vowelCount;
}

// Super concise instructor implementation using match() with a regular expression
function vowelRegex(str) {

    // returns an array or null if there are no matches
    const matches = str.match(/[aeiou]/gi);

    // if matches is array (truthy), then return matches.length, else if matches is null (falsy) then return 0
    return matches ? matches.length : 0;
}

vowels('Hello there person');

module.exports = vowelRegex;
