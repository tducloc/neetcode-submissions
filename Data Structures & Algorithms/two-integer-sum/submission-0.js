class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexMap = {};

        for (const index in nums) {
            const num = nums[index];
            const remain = target - num;

            if (indexMap[remain]) {
                return [+index, +indexMap[remain]];
            }

            indexMap[num] = index;
        }

        return []
    }
}
