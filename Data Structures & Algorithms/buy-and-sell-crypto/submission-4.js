class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minDecreasePivotIndex = -1;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < prices[i + 1]) {
                if (minDecreasePivotIndex === -1 || prices[minDecreasePivotIndex] > prices[i]) {
                    minDecreasePivotIndex = i;
                    continue;
                }
            }

            if (minDecreasePivotIndex !== -1) {
                maxProfit = Math.max(maxProfit, prices[i] - prices[minDecreasePivotIndex]);
            }
        }

        return maxProfit;
    }
}
