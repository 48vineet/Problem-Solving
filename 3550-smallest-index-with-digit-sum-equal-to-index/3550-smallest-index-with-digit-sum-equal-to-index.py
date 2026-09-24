class Solution:
    def smallestIndex(self, nums):
        def digit_sum(x):
            return sum(int(d) for d in str(x))
        
        for i in range(len(nums)):
            if digit_sum(nums[i]) == i:
                return i
        return -1
