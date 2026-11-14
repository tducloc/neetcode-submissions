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

        const INF = 2147483647;

        const visited = {};
        const queue = [];

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 0) {
                    queue.push([i, j]);
                }
            }
        }

        let tick = 0;
        while (queue.length) {
            const length = queue.length;

            for (let i = 0; i < length; i++) {
                const [row, col] = queue.shift();

                const value = grid[row][col];

                if (value === -1) {
                    continue;
                }

                const key = this.getKey(row, col, cols);

                if (visited[key]) {
                    continue;
                }

                visited[key] = true;
                if (value !== 0) {
                    grid[row][col] = tick;
                }

                if (row > 0 && grid[row - 1][col] === INF) {
                    queue.push([row - 1, col]);
                }
                if (col > 0 && grid[row][col - 1] === INF) {
                    queue.push([row, col - 1]);
                }
                if (row < rows - 1 && grid[row + 1][col] === INF) {
                    queue.push([row + 1, col]);
                }
                if (col < cols - 1 && grid[row][col + 1] === INF) {
                    queue.push([row, col + 1]);
                }
            }
            tick++;
        }
    }

    getKey(i: number, j: number, cols: number) {
        return i * cols + j;
    }
}
