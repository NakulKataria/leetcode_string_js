/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let isPresent = new Map();
    let left = 0;
    let maxCount = 0;
    
    for (let right = 0; right < s.length; right++) {
        if (isPresent.has(s[right])) {
            // Move the left pointer forward to exclude the repeated character
            left = Math.max(left, isPresent.get(s[right]) + 1);
        }

        // Store the last seen index of the character
        isPresent.set(s[right], right);

        // Update the maximum length
        maxCount = Math.max(maxCount, right - left + 1);
    }

    return maxCount;
};