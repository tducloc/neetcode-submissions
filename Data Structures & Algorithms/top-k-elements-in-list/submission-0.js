class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};

        // Tinh so lan xuat hien cua tung phan tu
        for (let i = 0; i < nums.length; i++) {
            countMap[nums[i]] = (countMap[nums[i]] || 0) + 1;
        }

        const bucket = {};
        const values = Object.keys(countMap);
        // Group cac phan tu co cung so lan xuat hien
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            const count = countMap[value];

            if (bucket[count]) {
                bucket[count].push(value);
            } else {
                bucket[count] = [value];
            }
        }

        const result = [];
        const frequents = Object.keys(bucket);

        for (let i = frequents.length - 1; i >= 0; i--) {
            const frequent = frequents[i];
            result.push(...bucket[frequent]);
            if (result.length > k) {
                break;
            }
        }

        return result.slice(0, k);
    }
}
