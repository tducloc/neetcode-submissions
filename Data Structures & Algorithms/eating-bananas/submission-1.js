class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles.sort((a, b) => a - b);

        const n = piles.length;

        let right = piles[n - 1];
        let left = 1;

        let min = Infinity;

        while (left <= right) {
            const k = Math.floor((right + left) / 2);

            const totalHoursK = piles.reduce((totalHours, pile) => {
                const timeToEatAll = Math.ceil(pile / k);
                return totalHours + timeToEatAll;
            }, 0);

            if (totalHoursK > h) {
                left = k + 1;
                continue;
            }

            min = Math.min(k, min);
            right = k - 1;
        }

        return min;
    }
}
