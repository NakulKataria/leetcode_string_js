/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   
    if (!strs.length) return "";
    
    strs.sort(); // Sorting ensures common prefix is between first & last words
    let first = strs[0];
    let last = strs[strs.length - 1];
    
    let i = 0;
    while (i < first.length && first[i] === last[i]) {
        i++;
    }
    
    return first.substring(0, i);

};