class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const n = matrix.length;
        const m = matrix[0].length;

        if (m === 0) {
            return false;
        }

        const k = n * m;

        let left = 0;
        let right = k - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            const i = Math.trunc(mid / m);
            const j = mid % m;

            const num = matrix[i][j];

            if (num === target) {
                return true;
            }

            if (num < target) {
                left = mid + 1;
                continue;
            }

            right = mid - 1;
        }

        return false;
    }
}
