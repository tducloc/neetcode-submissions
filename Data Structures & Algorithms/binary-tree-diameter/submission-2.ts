/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let max = 0;

        const dfs = (root) => {
            if (root === null) {
                return 0;
            }

            const left = dfs(root.left);
            const right = dfs(root.right);

            const total = left + right;
            max = Math.max(total, max);

            return 1 + Math.max(left, right);
        };

        dfs(root)
        return max;
    }
}
