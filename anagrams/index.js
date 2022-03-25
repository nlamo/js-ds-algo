// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// My solution, returns true if it's an anagram, false otherwise
// This is the one case where I actually prefer my implementation to the instructor's
function anagrams(stringA, stringB) {

    // regex here gets only the lowercase word from the string in each case
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

    // splits each string into arrays, sorts arrays, converts back to strings
    stringA = stringA.split('').sort().toString();
    stringB = stringB.split('').sort().toString();

    // checks for equality
    let returnValue = stringA === stringB;

    return returnValue;
}

// ^^^ FUNCTION TEST ^^^
// console.log(anagrams('Rail safety! Hello!', 'O, Hell! FAIRY TALES!'));

// Instructor implementation
function anagramsAlt(stringA, stringB) {

    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    // we know that they aren't anagrams if the number of keys is not equivalent
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    // we know that they aren't anagrams if one char doesn't have the same number of keys as another
    for (let char in aCharMap) {

        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

// Instructor implementation: helper function for anagramsAlt
function buildCharMap(str) {
    const charMap = {}
    
    // ugly as heck
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        // increments charMap[char] by one (if it already exists) OR creates new charMap[char] and sets to 1
        charMap[char] = charMap[char] + 1 || 1; 
    }

    return charMap;
}

console.log(anagrams("bag!e.l", "BaGeL"));

module.exports = anagrams;
