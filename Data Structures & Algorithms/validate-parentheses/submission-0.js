class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const pairs = {
            "{": "}",
            "(": ")",
            "[": "]",
        };

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (["(", "{", "["].includes(char)) {
                stack.push(char);
                continue;
            }

            const lastChar = stack.pop();
            const correctPair = pairs[lastChar];
            if (correctPair !== char) {
                return false;
            }
        }

        if (stack.length !== 0) {
            return false;
        }

        return true;
    }
}
