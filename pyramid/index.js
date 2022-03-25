// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Pretty sure this is the instructor implementation, but slightly modified (for conciseness)
function pyramid(n) {
    
    let end = 2 * n - 1;
    let midpoint = Math.floor(end / 2);

    for (let row = 0; row < n; ++row) {

        let level = ''; // output string for each level in pyramid

        for (let column = 0; column < end; ++column) {

            if ( (midpoint - row <= column) && (midpoint + row >= column) ) {
                level += '#';
            }
            else {
                level += ' ';
            }
        }

        console.log(level);
    } 
}

// Instructor implementation: recursive!
// As with the steps version, this will be very useful to review.
function recursivePyramid(n, row = 0, level = '') {

    if (n === row) {
        return;
    }

    if (level.length === (2 * n - 1 ) ) {
        console.log(level);
        return recursivePyramid(n, row + 1);
    }

    let end = 2 * n - 1;
    let midpoint = Math.floor(end / 2);
    let add; // contain character that we're supposed to add to level string

    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    }
    else {
        add = ' ';
    }

    pyramid(n, row, level + add);
}

pyramid(7);

module.exports = pyramid;

