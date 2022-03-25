// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Instructor implementation, but slightly modified
// Only real difference is that str.split(' ') is stored in a variable before being used in loop
function capitalize(str) {

    let finalWordArray = [];
    let wordArray = str.split(' '); // splits string into words

    // for each word, push word with capitalized first letter to finalWordArray
    for (let word of wordArray)
    {
        finalWordArray.push(word[0].toUpperCase() + word.slice(1));
    }

    return finalWordArray.join(' '); // returns string with spaces in between words
}

// My implementation
// Less concise, but clearer, I believe
function capitalizeAlt(str) {
    let result = str[0].toUpperCase(); // sets first letter

    for (let i = 1; i < str.length; i++)
    {
        if (str[i - 1] === ' ')
        {
            result += str[i].toUpperCase();
        }
        else
        {
            result += str[i];
        }
    }

    return result;
}

module.exports = capitalizeAlt;
