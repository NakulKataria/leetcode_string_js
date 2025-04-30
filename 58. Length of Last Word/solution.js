/*Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Trim trailing spaces and split the string by spaces
   const words = s.trim().split(' ');
   // Return the length of the last word
   return words[words.length - 1].length;
};