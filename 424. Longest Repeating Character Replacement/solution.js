/*You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations. */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = new Map();
let res = 0;

let l = 0, maxf = 0;
for (let r = 0; r < s.length; r++) {
    count.set(s[r], (count.get(s[r]) || 0) + 1);
    maxf = Math.max(maxf, count.get(s[r]));

    while ((r - l + 1) - maxf > k) {
        // Shrink the window by moving l
        count.set(s[l], count.get(s[l]) - 1);
        l++;

        // Recalculate maxf when l moves
        //maxf = Math.max(...Array.from(count.values()));  // This step will take O(n)
    }
    res = Math.max(res, r - l + 1);
}

return res;
};