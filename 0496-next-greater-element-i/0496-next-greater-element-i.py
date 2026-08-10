class Solution:
    def nextGreaterElement(self, nums1, nums2):
        n = len(nums2)
        ans = [-1] * n
        stack = []

        for i in range(n-1, -1, -1):
            while stack and stack[-1] <= nums2[i]:
                stack.pop()
            if stack:
                ans[i] = stack[-1]
            stack.append(nums2[i])

        res = []
        for x in nums1:
            idx = nums2.index(x)
            res.append(ans[idx])
        return res
