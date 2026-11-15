class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
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

        for (let i = 0; i < edges.length - 1; i++) {
            {
                for (let j = i + 1; j < edges.length; j++) {
                    const rootA = find(edges[i][0]);
                    const rootB = find(edges[j][0]);
                    if (rootA !== rootB) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
