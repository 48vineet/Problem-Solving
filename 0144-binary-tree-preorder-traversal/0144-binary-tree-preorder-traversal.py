# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: TreeNode | None) -> list[int]:
        arr = []
        def func(node):
            if not node:
                return
            arr.append(node.val)
            func(node.left)
            func(node.right)
        
        func(root)
        return arr