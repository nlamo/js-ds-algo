// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// My implementation
// iterating from the last character to the first, adding them to a new string in that order
function reverse(str) {

    let newString = ""

    for (let i = str.length - 1; i >= 0; --i)
    {
        newString += str[i]
    }

    return newString
}

module.exports = reverse;
