class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const result = [];

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i - 1]) {
                continue;
            }

            const target = -nums[i];
            const pairs = findPairs(nums, i + 1, target);

            pairs.forEach((pair) => result.push([nums[i], ...pair]));
        }

        return result;
    }
}

function findPairs(nums, start, target) {
    let left = start;
    let right = nums.length - 1;
    const result = [];

    const checked = {};

    while (left < right) {
        if (checked[nums[left]]) {
            left++;
            continue;
        }

        const leftNum = nums[left];
        const rightNum = nums[right];
        const total = leftNum + rightNum;

        if (total === target) {
            checked[leftNum] = true;
            result.push([leftNum, rightNum]);
            left++;
            continue;
        }

        if (total > target) {
            right--;
            continue;
        }

        left++;
    }

    return result;
}
