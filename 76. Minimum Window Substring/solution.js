/*
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t==="")return "";//edge case

    //we need two maps to compare them
    let hash={}, window={};
    //initalizing result values
    let res=[-1,-1],reslen=Infinity;
    //left pointer 
    let l=0;
    //filling hash
    for (let c of t){
        hash[c]=(hash[c] || 0)+1;
    }
     // desire is no of unique charachter needed in string and have is how many we have of them
    let desire=Object.keys(hash).length,have=0;
    
    for(let r=0;r<s.length;r++){
        const c=s[r];
        window[c]=(window[c] || 0)+1;
        if(hash[c] && window[c]===hash[c]){
            have++;
        }
        //if have fulfilled desire
        while(have===desire){
            //update res
            if(r-l+1<reslen){
                res=[l,r];
                reslen=r-l+1;
            }
            //shrinking windows
            window[s[l]]--;//shrinking windows
            if(hash[s[l]] && window[s[l]]<hash[s[l]]){
                have--;//haves are reduced if desired charachter is removed
            } 
            l++;
        }
      
    }
     return reslen===Infinity?"":s.slice(res[0],res[1]+1);    
};