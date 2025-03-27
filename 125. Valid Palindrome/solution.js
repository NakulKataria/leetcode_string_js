/*A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
 
    let str = s.toLowerCase();
    let left = 0, right = str.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters
        while (left < right && !(/[a-z0-9]/i.test(str[left]))) left++;
        while (left < right && !(/[a-z0-9]/i.test(str[right]))) right--;

        // Compare characters
        if (str[left] !== str[right]) return false;

        left++;
        right--;
    }

    return true;
};