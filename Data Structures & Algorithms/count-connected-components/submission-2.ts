class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        // DFS method
        // const visited = [];
        // const children = Array.from({ length: n }, () => []);

        // for (const [a, b] of edges) {
        //     children[a].push(b);
        //     children[b].push(a);
        // }

        // function dfs(cur, prev) {
        //     if (visited[cur]) {
        //         return;
        //     }

        //     visited[cur] = true;
        //     for (const child of children[cur]) {
        //         if (child === prev) {
        //             continue;
        //         }
        //         dfs(child, cur);
        //     }
        // }

        // let count = 0;
        // for (let i = 0; i < n; i++) {
        //     if (!visited[i]) {
        //         count++;
        //         dfs(i, -1);
        //     }
        // }

        // return count;

        // Union-find method
        const parent = [];

        for (let i = 0; i < n; i++) {
            parent[i] = i;
        }

        function find(x) {
            while (x !== parent[x]) {
                x = parent[x];
            }
            return x;
        }

        for (const [a, b] of edges) {
            const rootA = find(a);
            const rootB = find(b);

            if (rootA !== rootB) {
                parent[rootA] = rootB;
            }
        }

        let count = 0;
        for (let i = 0; i < n; i++) {
            if (i === parent[i]) {
                count++;
            }
        }

        return count;
    }
}
