class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1. Đếm tần suất
        const countMap = new Map();
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        // 2. Bucket: index = frequency
        const bucket = Array(nums.length + 1)
            .fill()
            .map(() => []);

        for (const [num, freq] of countMap.entries()) {
            bucket[freq].push(num);
        }

        // 3. Lấy từ tần suất cao xuống
        const result = [];

        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const num of bucket[i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}