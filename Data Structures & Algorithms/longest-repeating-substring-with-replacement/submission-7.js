class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // Bruteforce
    // characterReplacement(s, k) {
    //     let max = 0;

    //     let count = {};

    //     const chars = s.split("");

    //     for (let i = 0; i < chars.length; i++) {
    //         let maxChar = 0;

    //         for (let j = i; j < chars.length; j++) {
    //             count[chars[j]] = (count[chars[j]] || 0) + 1;

    //             maxChar = Math.max(maxChar, count[chars[j]]);

    //             const isValid = j - 1 + 1 - maxChar <= k;
    //             if (isValid) {
    //                 max = Math.max(max, count.length);
    //             }
    //         }

    //         count = {};
    //     }

    //     return max;
    // }

    characterReplacement(s, k) {
        let max = 0;
        let maxF = 0;
        let left = 0;

        let count = {};

        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            count[char] = (count[char] || 0) + 1;
            maxF = Math.max(maxF, count[char]);

            while (right - left + 1 - maxF > k) {
                count[s[left]] = count[s[left]] - 1;
                left++;
            }

            max = Math.max(max, right - left + 1);
        }

        return max;
    }
}
