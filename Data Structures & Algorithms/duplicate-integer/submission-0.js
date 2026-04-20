class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const checked = {};

        for (const num of nums) {
            if (checked[num]) {
                return true;
            }

            checked[num] = true;
        }

        return false;
    }
}