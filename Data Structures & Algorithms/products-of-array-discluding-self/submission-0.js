class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [];
        const suffix = [];
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            const previousPrefix = prefix[i - 1] !== undefined ? prefix[i - 1] : 1;
            const currentPrefix = previousPrefix * nums[i];
            prefix.push(currentPrefix);
        }

        let j = 0;
        for (let i = nums.length - 1; i >= 0; i--) {
            const previousSuffix = suffix[0] !== undefined ? suffix[0] : 1;
            const currentSuffix = previousSuffix * nums[i];
            suffix.unshift(currentSuffix);
            j++;
        }

        for (let i = 0; i < nums.length; i++) {
            const currentPrefix = prefix[i - 1] !== undefined ? prefix[i - 1] : 1;
            const currentSuffix = suffix[i + 1] !== undefined ? suffix[i + 1] : 1;
            const current = currentPrefix * currentSuffix;
            result.push(current);
        }

        return result;
    }
}
