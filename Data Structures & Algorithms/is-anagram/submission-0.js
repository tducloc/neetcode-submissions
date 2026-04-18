class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const mapS = {};
        const mapT = {};

        for (let i = 0; i < s.length; i++) {
            const charS = s[i];
            const charT = t[i];

            if (!mapS[charS]) {
                mapS[charS] = 1;
            } else {
                mapS[charS] += 1;
            }

            if (!mapT[charT]) {
                mapT[charT] = 1;
            } else {
                mapT[charT] += 1;
            }
        }

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (mapS[char] !== mapT[char]) {
                return false;
            }
        }

        return true;
    }
}
