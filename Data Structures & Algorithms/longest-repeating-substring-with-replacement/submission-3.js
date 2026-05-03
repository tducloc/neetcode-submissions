class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // Bruteforce
        let max = 0;

        let count = {};

        const chars = s.split("");

        for (let i = 0; i < chars.length; i++) {
            for (let j = i; j < chars.length; j++) {
                count[chars[j]] = (count[chars[j]] || 0) + 1;
                count.length = (count.length || 0) + 1;

                let maxChar = 0;
                const subChars = Object.entries(count);

                for (const [key, num] of subChars) {
                    if (key !== "length") {
                        maxChar = Math.max(num, maxChar);
                    }
                }

                const isValid = count.length - maxChar <= k;
                if (isValid) {
                    max = Math.max(max, count.length);
                }
            }

            count = {};
        }

        return max;
    }
}
