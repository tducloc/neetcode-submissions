class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left <= right) {
            const numLeft = numbers[left];
            const numRight = numbers[right];
            const total = numLeft + numRight;

            if (total == target) {
                return [left + 1, right + 1];
            }

            if (total < target) {
                left++;
                continue;
            }

            right--;
        }

        return [];
    }
}
