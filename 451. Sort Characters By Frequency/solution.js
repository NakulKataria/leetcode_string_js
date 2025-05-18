/*Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.*/

/**
 * @param {string} s
 * @return {string}
 */
var  frequencySort=(s)=>{
  // Step 1: Count frequency of each character
  const freqMap = {};
  for (let char of s) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  // Step 2: Bucket sort by frequency
  const buckets = Array(s.length + 1).fill().map(() => []);
  for (let char in freqMap) {
    const freq = freqMap[char];
    buckets[freq].push(char);
  }

  // Step 3: Build result from buckets (in reverse order)
  let result = '';
  for (let i = buckets.length - 1; i >= 0; i--) {
    for (let char of buckets[i]) {
      result += char.repeat(i);
    }
  }

  return result;
};