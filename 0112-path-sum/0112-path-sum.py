class Solution:
    def hasPathSum(self, root: TreeNode | None, targetSum: int) -> bool:
        def rec(node, curr_sum):
            if not node:
                return False

            curr_sum += node.val

            if not node.left and not node.right:
                return curr_sum == targetSum

            return rec(node.left, curr_sum) or rec(node.right, curr_sum)

        return rec(root, 0)