// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// My implementation (first)

/*
 * We have an outer 'chunkArray' initialized. i is initialized to 0, and j to the chunk size.
 *
 * For each loop, 'element' is started at 0 and 'chunk' is an empty array. While i != j, elements 
 * are added to the chunk.
 * 
 * After each loop, j will be incremented by size (j = j + size), which sets the start of the next
 * chunk to the correct position in the array.
 * 
 * Each chunk is pushed to 'chunkArray'.
 * 
 * Note: if the last chunk is in fact smaller than the size - which it often will be - then undefined elements
 * will be added. These need to be removed. As such, the last step is to filter out the unwanted
 * undefined elements, and then our solution is complete.
 *
 */

function chunk(array, size) {
   let chunkArray = [];

   for (let i = 0, j = size; i < array.length; j = j + size) {
      let element = 0;
      let chunk = [];

      // build the chunk
      while (i != j) {
         chunk[element] = array[i];
         ++element;
         ++i;
      }

      // filter array if it has any empty elements (specifically the last chunk, which will iterate fully)
      if (chunk.includes(undefined)) {
         chunk = chunk.filter(element => element != undefined);
      }

      chunkArray.push(chunk);
   }

   return chunkArray;
}

// Instructor: 1st implementation
function chunkAlt(array, size) {
   const chunkArray = [];

   // for each loop, elements are being added one at a time
   for (let element of array) {
      const chunk = chunkArray[chunkArray.length - 1];

      console.log(chunk);

      if (!chunk || chunk.length === size) {
         chunkArray.push([element]); // new chunk
      } 
      else {
         chunk.push(element);
      }
   }

   return chunkArray;
}

// Instructor: 2nd implementation
function chunkAltSecond(array, size) {
   const chunkArray = [];

   let chunk = [];
   let index = 0;

   while (index < array.length) {
      chunk = array.slice(index, index + size);
      chunkArray.push(chunk);
      index = index + size;
   }

   return chunkArray;
}

chunkAltSecond([1, 2, 3, 4, 5], 2);

module.exports = chunk;
