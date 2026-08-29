# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.dia = 0
        def helpFunc(node):
            if node is None:
                return 0
            lh = helpFunc(node.left)
            rh = helpFunc(node.right)
            self.dia = max(self.dia, lh + rh)
            return 1 + max(lh, rh)
        helpFunc(root)
        return self.dia
