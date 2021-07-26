// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// My implementation
function maxChar(str) {

    // const stringArray = str.split('')
    const chars = {};

    // for each char in string, if the character doesn't exist in the object chars
    // then add it and set its value to one; else increment the value of that char (key) by one
    for (let char of str)
    {
        if (!chars[char])
        {
            chars[char] = 1;
        }
        else
        {
            chars[char]++;
        }
    }

    let max = 0;

    // find max of the keys now found in chars
    for (let key in chars)
    {
        if (chars[key] > max)
        {
            max = key;
        }
    }

    return max;
}

module.exports = maxChar;
