# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: TreeNode | None, k: int) -> int:
        arr = []

        def backtrack(node):
            if node is None:
                return
    
            backtrack(node.left)
            arr.append(node.val)
            backtrack(node.right)

        backtrack(root)
        arr.sort()
        return arr[k-1]    