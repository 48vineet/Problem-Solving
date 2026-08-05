class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = []
        for i in range(len(nums1)):
            pos = nums2.index(nums1[i])
            greater = -1
            for j in range(pos + 1, len(nums2)):
                if nums2[j] > nums1[i]:
                    greater = nums2[j]
                    break
            res.append(greater)
        return res
