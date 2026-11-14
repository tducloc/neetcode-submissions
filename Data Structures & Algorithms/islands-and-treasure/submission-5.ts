class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        // Input: 2D matrix with 3 values: -1 0 Inf
        // Output: 2D matrix with step values to nearest treasure chest position

        // Idea:
        // Start at 0 value position then dfs to any position that is not -1 or 0
        // Then check if that position is visited or not
        // If not then check if it greater than the current step => change it with current step
        // The visited should be split by value 0 position

        const rows = grid.length;
        const cols = grid[0].length;

        const queue = [];

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 0) {
                    queue.push([i, j]);
                }
            }
        }

        const INF = 2147483647;
        const dirs = [
            [-1, 0],
            [0, -1],
            [1, 0],
            [0, 1],
        ];

        while (queue.length) {
            const [row, col] = queue.shift();

            for (const [dr, dc] of dirs) {
                const r = row + dr;
                const c = col + dc;

                if (r < 0 || c < 0 || r >= rows || c >= cols) {
                    continue;
                }
                if (grid[r][c] !== INF) {
                    continue;
                }
                grid[r][c] = grid[row][col] + 1;
                queue.push([r, c]);
            }
        }
    }
}
