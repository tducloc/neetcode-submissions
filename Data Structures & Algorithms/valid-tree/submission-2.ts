class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length !== n - 1) return false;

        // Union method
        const parents = [];

        for (let i = 0; i < n; i++) {
            parents[i] = i;
        }

        function find(x) {
            while (x !== parents[x]) {
                x = parents[x];
            }
            return x;
        }

        for (const [a, b] of edges) {
            const rootA = find(a);
            const rootB = find(b);

            if (rootA === rootB) {
                return false;
            }

            parents[rootA] = rootB;
        }

        return true;

        // DFS method
    }
}
