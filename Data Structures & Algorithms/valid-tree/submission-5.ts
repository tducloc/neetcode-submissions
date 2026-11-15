class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        // Union method
        if (edges.length + 1 !== n) {
            return false;
        }

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
        // const adj = Array.from({ length: n }, () => []);

        // for (const [a, b] of edges) {
        //     adj[a].push(b);
        //     adj[b].push(a);
        // }

        // const visited = [];

        // function dfs(node, prev) {
        //     if (visited[node]) {
        //         return false;
        //     }

        //     visited[node] = true;

        //     for (const next of adj[node]) {
        //         if (next === prev) {
        //             continue;
        //         }
        //         if (!dfs(next, node)) {
        //             return false;
        //         }
        //     }

        //     return true;
        // }

        // if (!dfs(0, -1)) {
        //     return false;
        // }

        // return visited.length === n;
    }
}
