/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s; // Edge case: If only one row, return the original string

   let depth = 0; 
   let increasing = true; 
   let arr = new Array(numRows).fill(""); // Initialize an array of empty strings

   for (let i = 0; i < s.length; i++) {
       arr[depth] += s[i]; // Append character to correct row

       if (increasing) {
           depth++;
           if (depth === numRows - 1) increasing = false; // Switch to decreasing
       } else {
           depth--;
           if (depth === 0) increasing = true; // Switch to increasing
       }
   }

   return arr.join(""); // Join all rows into one final string
};