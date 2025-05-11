/*You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.*/
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
let lastIndex=-1;
for (let i=num.length-1;i>=0;i--){
    let ch=num.charCodeAt(i);
    if(ch%2===0)continue;
    lastIndex=i+1;
    break;
}
if(lastIndex===-1)return "";
else return num.slice(0,lastIndex);
};