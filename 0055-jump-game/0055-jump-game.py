class Solution:
    def canJump(self, nums: List[int]) -> bool:
        max_i = 0
        for i in range(len(nums)):
            if i > max_i:
                return False
            
            max_i = max(i + nums[i] , max_i)
        
        return max_i >= len(nums)-1
