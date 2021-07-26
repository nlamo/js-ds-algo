// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My solution: longwinded, but it works

/*
 * If the integer is negative, we store its absolute value. Otherwise, it stays the same.
 *
 * We then turn it into a string (intString) and create an empty string (reversedString).
 *
 * Next, we iterate from the last character to the first, adding them to reversedString in 
 * that order.
 *
 * Then, we parse that string back into an integer.
 * 
 * Finally, if the original value was negative, then we make the parsed integer negative!
 * 
 */

function reverseInt(n) {

    let returnInt = 0;

    if (n < 0)
    {
        returnInt = Math.abs(n);
    }
    else
    {
        returnInt = n;
    }

    let intString = returnInt.toString();
    let reversedString = "";


    for (let i = intString.length - 1; i >= 0; --i)
    {
        reversedString += intString[i];
    }

    returnInt = parseInt(reversedString)

    if (n < 0)
    {
        returnInt = -returnInt;
    }

    return returnInt;

}

module.exports = reverseInt;
