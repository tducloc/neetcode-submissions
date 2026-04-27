class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        let minIndex = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (minIndex === -1 || nums[minIndex] > nums[mid]) {
                minIndex = mid;
            }

            if (nums[mid] >= nums[right]) {
                left = mid + 1;
                continue;
            }

            right = mid - 1;
        }

        left = 0;
        right = minIndex - 1;

        let left2 = minIndex;
        let right2 = nums.length - 1;

        while (left <= right || left2 <= right2) {
            if (left <= right) {
                const mid = Math.floor((left + right) / 2);

                if (nums[mid] === target) {
                    return mid;
                }

                if (nums[mid] > target) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }

            if (left2 <= right2) {
                const mid = Math.floor((left2 + right2) / 2);

                if (nums[mid] === target) {
                    return mid;
                }

                if (nums[mid] > target) {
                    right2 = mid - 1;
                } else {
                    left2 = mid + 1;
                }
            }
        }

        return -1;
    }
}
