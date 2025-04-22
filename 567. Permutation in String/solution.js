/*Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    // Frequency maps for s1 and sliding window in s2
    let s1Map = new Array(26).fill(0); // For characters a-z
    let s2Map = new Array(26).fill(0);

    // Fill the frequency map for s1
    for (let char of s1) {
        s1Map[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Initialize the first window in s2
    for (let i = 0; i < s1.length; i++) {
        s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Check the first window
    if (isEqual(s1Map, s2Map)) return true;

    // Slide the window across s2
    for (let i = s1.length; i < s2.length; i++) {
        // Add the new character in the window
        s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;

        // Remove the old character from the window
        s2Map[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;

        // Check if current window matches s1's frequency map
        if (isEqual(s1Map, s2Map)) return true;
    }

    return false;
}

// Helper function to check if two frequency maps are equal
function isEqual(map1, map2) {
    for (let i = 0; i < 26; i++) {
        if (map1[i] !== map2[i]) return false;
    }
    return true;
}