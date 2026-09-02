# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.maxi = float("-inf")

        def solve(node):
            if not node:
                return 0

            ans1 = max(0, solve(node.left))
            ans2 = max(0, solve(node.right))

            self.summ = ans1 + node.val + ans2

            self.maxi = max(self.maxi, self.summ)

            return node.val + max(ans1, ans2)

        solve(root)
        return self.maxi