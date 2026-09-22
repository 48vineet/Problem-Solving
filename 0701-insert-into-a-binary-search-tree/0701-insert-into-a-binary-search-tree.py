class Solution:
    def insertIntoBST(self, root: TreeNode | None, val: int) -> TreeNode | None:
        if root is None:
            return TreeNode(val)
        
        temp = root
        while True:
            if val < temp.val:
                if temp.left is None:
                    temp.left = TreeNode(val)
                    break
                else:
                    temp = temp.left
            else:
                if temp.right is None:
                    temp.right = TreeNode(val)
                    break
                else:
                    temp = temp.right
        
        return root
