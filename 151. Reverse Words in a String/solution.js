/*Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let i=s.length-1;
    let ans="";
    while(i>=0){
        while(s[i]!==" " && i>=0){
            i--;
        }
        let j=i+1;
        while(j<s.length && s[j]!==" "){
            ans+=s[j];
            j++;
        }
        while(s[i]===" "){
            
            i--;
        }
        ans+=" ";
    }
    return ans.trim();
};
/*let rvrsed = s.split(" ").reverse();
  let arr = [];
  rvrsed.map((val) => {
    if (val != "") {
      arr.push(val);
    }
  });
  return arr.join(" ");*/
  //better solution using inbuild functions