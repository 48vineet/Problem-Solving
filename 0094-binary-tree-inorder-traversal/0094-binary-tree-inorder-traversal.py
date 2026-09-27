# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        arr = []
        c = root
        
        while c is not None:
            if c.left is None:
                arr.append(c.val)
                c = c.right
            else:
                p = c.left

                while p.right is not None and p.right != c:
                    p = p.right
                
                if p.right is None:
                    p.right = c
                    c = c.left
                else:
                    p.right = None
                    arr.append(c.val)
                    c = c.right
        
        return arr