class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const chars = s.split("");

        let left = 0;

        const subString = new Set();
        let maxLength = 0;

        for (let right = 0; right < chars.length; right++) {
            const isDuplicated = subString.has(chars[right]);

            if (isDuplicated) {
                maxLength = Math.max(subString.size, maxLength);

                while (chars[left] !== chars[right]) {
                    subString.delete(chars[left]);
                    left++;
                }

                subString.delete(chars[left]);
                left++;
            }

            subString.add(chars[right]);
        }

        maxLength = Math.max(subString.size, maxLength);

        return maxLength;
    }
}
