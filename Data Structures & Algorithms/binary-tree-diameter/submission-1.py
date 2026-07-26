# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.ans = 0

        def dfs(node):
            if node is None:
                return 0

            left = dfs(node.left)
            right = dfs(node.right)

            # Đường kính đi qua node hiện tại
            self.ans = max(self.ans, left + right)

            # Trả về chiều cao của subtree
            return 1 + max(left, right)

        dfs(root)
        return self.ans