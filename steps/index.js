// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// MUST use console.log(), can't use process.stdout.write()

// My original solution, I'm pretty sure - pretty standard for this simple problem
// But Grider provides a solution that is essentially identical
function steps(n) {

    for (let i = 0; i < n; ++i) {

        let outputString = '';

        for (let j = 0; j < n; ++j) {

            if (j <= i) {
                outputString += '#';
            }
            else {
                outputString += ' ';
            }
        }

        console.log(outputString);
    }
}

// Instructor implementation: recursive! (only some var names changed)
// I am not well-versed in recursive programming, so reviewing this will be valuable

 // IMPORTANT: this really functions like a loop for the creation of each outputString
function recursiveSteps(n, row = 0, outputString = '') 
{
    // base case
    if (n === row) {
        return;
    }

    // will output
    if (n === outputString.length) {
        console.log(outputString);
        return recursiveSteps(n, row + 1); // outputString remains as default '', as each call must make a new string
    }

    if (outputString.length <= row) {
        outputString += '#';
    }
    else {
        outputString += ' ';
    }

    steps(n, row, outputString); // recursive call where n is the same, the row is the same, and outputString is the same
}                               

steps(5);

module.exports = steps;
