/*Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let m=haystack.length;
    let n=needle.length-1;
    for(let i=0;i<m;i++){
        if(haystack.slice(i,i+n+1)===needle)return i;
    }
    return-1;
};


//found better approach using 2 pointer i,j
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const hLen = haystack.length;
    const nLen = needle.length;

    if (nLen === 0) return 0;
    let i = 0;

    while (i <= hLen - nLen) {
        let j = 0;
        while (j < nLen && haystack[i + j] === needle[j]) {
            j++;
        }

        if (j === nLen) return i;
        i++;
    }

    return -1;
};