// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// My implementation
function chunk(array, size) {

    let chunkArray = []; // array of chunks
    
    for (let i = 0, j = size; i < array.length; )
    {
        // for each loop, a new chunk array is made (starts at 0)
        let element = 0;
        let chunk = [];

        // build the chunk
        while (i != j)
        {
            chunk[element] = array[i];

            ++element;
            ++i;
        }

        // filter array if it has any empty elements
        if (chunk.includes(undefined))
        {
            chunk = chunk.filter(function (element) {
                return element != undefined;
            })
        }

        // add [filtered] chunk to array
        chunkArray.push(chunk) 
        
        // new starting point for size
        if (j < array.length)
        {
            j = j + size;
        }
    }

    return chunkArray;
}

// Instructor: 1st implementation
function chunkAlt(array, size) {
    const chunkArray = [];

    // for each loop, elements are being added one at a time
    for (let element of array)
    {
        const chunk = chunkArray[chunkArray.length - 1];

        console.log(chunk)

        if (!chunk || chunk.length === size)
        {
            chunkArray.push([element]); // new chunk
        }
        else 
        {
            chunk.push(element);
        }
    }

    return chunkArray;
}

// Instructor: 2nd implementation
function chunkAltSecond(array, size) {
    const chunkArray = [];
    
    let chunk = []
    let index = 0; 

    while (index < array.length)
    {
        chunk = array.slice(index, index + size);
        chunkArray.push(chunk)
        index = index + size;
    }

    return chunkArray;
}

chunkAltSecond([1, 2, 3, 4, 5], 2);

module.exports = chunkAltSecond;
