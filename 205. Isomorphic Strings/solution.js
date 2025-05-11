/*Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let mapST = new Map();
    let mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        let c1 = s[i], c2 = t[i];

        if ((mapST.has(c1) && mapST.get(c1) !== c2) ||
            (mapTS.has(c2) && mapTS.get(c2) !== c1)) {
            return false;
        }

        mapST.set(c1, c2);
        mapTS.set(c2, c1);
    }

    return true;


};