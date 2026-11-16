class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const visited = [];
        const children = Array.from({ length: n }, () => []);

        for (const [a, b] of edges) {
            children[a].push(b);
            children[b].push(a);
        }

        function dfs(cur, prev) {
            if (visited[cur]) {
                return;
            }

            visited[cur] = true;
            for (const child of children[cur]) {
                if (child === prev) {
                    continue;
                }
                dfs(child, cur);
            }
        }

        let count = 0;
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                count++;
                dfs(i, -1);
            }
        }

        return count;
    }
}
